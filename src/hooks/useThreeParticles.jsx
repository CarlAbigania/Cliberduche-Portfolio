import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Advanced 3D particle system with detailed rendering
 */
export const useThreeParticles = (options = {}) => {
  const {
    particleCount = 1000,
    particleColor = '#3b82f6',
    getTargetPositions = null,
  } = options;

  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef([]);
  const scrollProgressRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Scene setup with better rendering
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    sceneRef.current = scene;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 2000);
    camera.position.set(300, 200, 500);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowShadowMap;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(500, 500, 400);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x3b82f6, 0.5);
    pointLight.position.set(0, 0, 200);
    scene.add(pointLight);

    // Create glowing particle system
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const targetPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorObj = new THREE.Color(particleColor);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 1000;
      const y = (Math.random() - 0.5) * 1000;
      const z = (Math.random() - 0.5) * 1000;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      targetPositions[i * 3] = x;
      targetPositions[i * 3 + 1] = y;
      targetPositions[i * 3 + 2] = z;

      colors[i * 3] = colorObj.r;
      colors[i * 3 + 1] = colorObj.g;
      colors[i * 3 + 2] = colorObj.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Advanced particle material with glow
    const particleMaterial = new THREE.PointsMaterial({
      size: 10,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      sizeRange: [1, 100],
    });

    const points = new THREE.Points(particleGeometry, particleMaterial);
    points.castShadow = true;
    scene.add(points);

    // Lines connecting nearby particles
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleCount * particleCount * 3 * 2); // Max possible connections
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: particleColor,
      transparent: true,
      opacity: 0.2,
      linewidth: 1,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);
    lineRef.current = { geometry: lineGeometry, lines };

    // Particle data
    particlesRef.current = Array.from({ length: particleCount }, (_, i) => ({
      index: i,
      vx: 0,
      vy: 0,
      vz: 0,
      mass: 0.5 + Math.random() * 0.5,
    }));

    // Event handlers
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        let progress = 0;
        if (rect.top < windowHeight && rect.bottom > 0) {
          progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
        }
        scrollProgressRef.current = progress;
      }
    };

    const handleResize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      const positions = particleGeometry.attributes.position.array;
      const progress = scrollProgressRef.current;

      // Update target positions
      if (getTargetPositions) {
        const targets = getTargetPositions(progress, 800, 800, particlesRef.current);
        for (let i = 0; i < particleCount; i++) {
          if (targets[i]) {
            targetPositions[i * 3] = targets[i].x - 400;
            targetPositions[i * 3 + 1] = targets[i].y - 400;
            targetPositions[i * 3 + 2] = (targets[i].z || 0) - 400;
          }
        }
      }

      // Update particles
      const linePositions = new Float32Array(particleCount * particleCount * 3 * 2);
      let lineIndex = 0;
      const connectionDistance = 150;

      for (let i = 0; i < particleCount; i++) {
        const particle = particlesRef.current[i];

        const dx = targetPositions[i * 3] - positions[i * 3];
        const dy = targetPositions[i * 3 + 1] - positions[i * 3 + 1];
        const dz = targetPositions[i * 3 + 2] - positions[i * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance > 1) {
          const force = Math.min(distance * 0.015, 8) * particle.mass;
          particle.vx += (dx / distance) * force;
          particle.vy += (dy / distance) * force;
          particle.vz += (dz / distance) * force;
        }

        particle.vx *= 0.94;
        particle.vy *= 0.94;
        particle.vz *= 0.94;

        positions[i * 3] += particle.vx;
        positions[i * 3 + 1] += particle.vy;
        positions[i * 3 + 2] += particle.vz;

        // Keep in bounds
        if (Math.abs(positions[i * 3]) > 500) positions[i * 3] *= 0.95;
        if (Math.abs(positions[i * 3 + 1]) > 500) positions[i * 3 + 1] *= 0.95;
        if (Math.abs(positions[i * 3 + 2]) > 500) positions[i * 3 + 2] *= 0.95;

        // Draw connections
        for (let j = i + 1; j < Math.min(i + 15, particleCount); j++) {
          const dx2 = positions[j * 3] - positions[i * 3];
          const dy2 = positions[j * 3 + 1] - positions[i * 3 + 1];
          const dz2 = positions[j * 3 + 2] - positions[i * 3 + 2];
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2 + dz2 * dz2);

          if (d < connectionDistance) {
            linePositions[lineIndex * 3] = positions[i * 3];
            linePositions[lineIndex * 3 + 1] = positions[i * 3 + 1];
            linePositions[lineIndex * 3 + 2] = positions[i * 3 + 2];
            lineIndex++;

            linePositions[lineIndex * 3] = positions[j * 3];
            linePositions[lineIndex * 3 + 1] = positions[j * 3 + 1];
            linePositions[lineIndex * 3 + 2] = positions[j * 3 + 2];
            lineIndex++;
          }
        }
      }

      particleGeometry.attributes.position.needsUpdate = true;
      lineRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(linePositions.slice(0, lineIndex * 3), 3));
      lineRef.current.geometry.attributes.position.needsUpdate = true;

      // Camera positioning
      camera.position.x = 300 + Math.sin(Date.now() * 0.0002) * 100;
      camera.position.y = 200 + Math.cos(Date.now() * 0.00015) * 50;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
      particleGeometry.dispose();
      lineGeometry.dispose();
      particleMaterial.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [particleCount, particleColor, getTargetPositions]);

  return { canvasRef };
};

/**
 * 3D shape creators with ultra-detailed structures
 */
export const particleShapes3D = {
  // Upward Arrow - Clear Growth Symbol
  prototypeBuilding: (scrollPercent, canvasWidth, canvasHeight, particles) => {
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const influence = Math.min(scrollPercent * 3, 1);

    return particles.map((_, i) => {
      const progress = i / particles.length;
      let x, y, z;

      // Left Arrow Line (25%)
      if (progress < 0.25) {
        const lineProgress = (progress / 0.25);
        x = centerX - 100 + lineProgress * 50;
        y = centerY + 150 - lineProgress * 300;
        z = centerY + (Math.random() - 0.5) * 80;
      }
      // Right Arrow Line (25%)
      else if (progress < 0.50) {
        const lineProgress = ((progress - 0.25) / 0.25);
        x = centerX + 100 - lineProgress * 50;
        y = centerY + 150 - lineProgress * 300;
        z = centerY + (Math.random() - 0.5) * 80;
      }
      // Center Arrow Line (25%)
      else if (progress < 0.75) {
        const lineProgress = ((progress - 0.50) / 0.25);
        x = centerX + (Math.random() - 0.5) * 20;
        y = centerY + 150 - lineProgress * 300;
        z = centerY + (Math.random() - 0.5) * 80;
      }
      // Arrow Head - Top Point (20%)
      else if (progress < 0.85) {
        const headProgress = ((progress - 0.75) / 0.10);
        const angle = Math.PI / 4;
        const radius = headProgress * 150;
        
        x = centerX + Math.sin(angle) * radius;
        y = centerY - 150 - Math.cos(angle) * radius;
        z = centerY + (Math.random() - 0.5) * 60;
      }
      // Arrow Head - Left (8%)
      else if (progress < 0.92) {
        const headProgress = ((progress - 0.85) / 0.07);
        const angle = (Math.PI * 3) / 4;
        const radius = (1 - headProgress) * 150;
        
        x = centerX - Math.sin(angle) * radius;
        y = centerY - 150 + Math.cos(angle) * radius;
        z = centerY + (Math.random() - 0.5) * 60;
      }
      // Arrow Head - Right (7%)
      else {
        const headProgress = ((progress - 0.92) / 0.08);
        const angle = Math.PI / 4;
        const radius = (1 - headProgress) * 150;
        
        x = centerX + Math.sin(angle) * radius;
        y = centerY - 150 + Math.cos(angle) * radius;
        z = centerY + (Math.random() - 0.5) * 60;
      }

      const angle = (i / particles.length) * Math.PI * 2;
      const randomRadius = 450;
      const randomX = centerX + Math.cos(angle) * randomRadius;
      const randomY = centerY + Math.sin(angle) * randomRadius;
      const randomZ = (Math.random() - 0.5) * 500;

      return {
        x: x * influence + randomX * (1 - influence),
        y: y * influence + randomY * (1 - influence),
        z: z * influence + randomZ * (1 - influence),
      };
    });
  },

  // Ultra-detailed modern skyscraper with complex architecture
  ultraDetailedBuilding: (scrollPercent, canvasWidth, canvasHeight, particles) => {
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const influence = Math.min(scrollPercent * 3, 1);

    return particles.map((_, i) => {
      const progress = i / particles.length;
      let x, y, z;

      // Base foundation (5% of particles)
      if (progress < 0.05) {
        const baseProgress = (progress / 0.05);
        const baseWidth = 250;
        x = centerX - baseWidth / 2 + baseProgress * baseWidth;
        y = centerY + 200;
        z = centerY + (Math.random() - 0.5) * 150;
      }
      // Left exterior wall with detailed facade (20% of particles)
      else if (progress < 0.25) {
        const wallProgress = ((progress - 0.05) / 0.2);
        const floorCount = 25;
        const floor = Math.floor(wallProgress * floorCount);
        const floorFraction = (wallProgress * floorCount) - floor;
        const windowsPerFloor = 4;
        const windowIndex = Math.floor((i % 40) / 10);
        
        x = centerX - 120;
        y = centerY + 200 - (floor * 350 / floorCount) - floorFraction * (350 / floorCount);
        z = centerY - 60 + (windowIndex * 30);
      }
      // Right exterior wall with detailed facade (20% of particles)
      else if (progress < 0.45) {
        const wallProgress = ((progress - 0.25) / 0.2);
        const floorCount = 25;
        const floor = Math.floor(wallProgress * floorCount);
        const floorFraction = (wallProgress * floorCount) - floor;
        
        x = centerX + 120;
        y = centerY + 200 - (floor * 350 / floorCount) - floorFraction * (350 / floorCount);
        z = centerY - 60 + (Math.random() - 0.5) * 100;
      }
      // Front facade with window grid (20% of particles)
      else if (progress < 0.65) {
        const facadeProgress = ((progress - 0.45) / 0.2);
        const gridX = Math.floor(facadeProgress * 10) % 10;
        const gridY = Math.floor((i % 50) / 5) % 10;
        
        x = centerX - 100 + gridX * 20;
        y = centerY + 200 - gridY * 35;
        z = centerY + 80;
      }
      // Roof structure with complexity (10% of particles)
      else if (progress < 0.75) {
        const roofProgress = ((progress - 0.65) / 0.1);
        const roofLayers = 5;
        const layer = Math.floor(roofProgress * roofLayers);
        
        x = centerX - 120 + roofProgress * 240;
        y = centerY - 175 + layer * 15;
        z = centerY + (Math.random() - 0.5) * 100;
      }
      // Interior support structure (15% of particles)
      else if (progress < 0.9) {
        const interiorProgress = ((progress - 0.75) / 0.15);
        const columnCount = 4;
        const columnIndex = Math.floor(interiorProgress * columnCount);
        const columnX = centerX - 80 + columnIndex * 50;
        const columnY = centerY + 200 - interiorProgress * 350;
        
        x = columnX + (Math.random() - 0.5) * 20;
        y = columnY;
        z = centerY + (Math.random() - 0.5) * 80;
      }
      // Top spire/antenna (10% of particles)
      else {
        const spireProgress = ((progress - 0.9) / 0.1);
        x = centerX + (Math.random() - 0.5) * 15;
        y = centerY - 175 - spireProgress * 150;
        z = centerY + (Math.random() - 0.5) * 30;
      }

      // Blend with random positions
      const angle = (i / particles.length) * Math.PI * 2;
      const randomRadius = 400;
      const randomX = centerX + Math.cos(angle) * randomRadius;
      const randomY = centerY + Math.sin(angle) * randomRadius;
      const randomZ = (Math.random() - 0.5) * 500;

      return {
        x: x * influence + randomX * (1 - influence),
        y: y * influence + randomY * (1 - influence),
        z: z * influence + randomZ * (1 - influence),
      };
    });
  },

  // Complex construction site with multiple elements
  constructionSite: (scrollPercent, canvasWidth, canvasHeight, particles) => {
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const influence = Math.min(scrollPercent * 3, 1);

    return particles.map((_, i) => {
      const progress = i / particles.length;
      let x, y, z;

      // Main building under construction (40%)
      if (progress < 0.4) {
        const sectionProgress = (progress / 0.4);
        const floorCount = 15;
        const floor = Math.floor(sectionProgress * floorCount);
        const floorX = Math.floor((i % 100) / 20) % 5;
        
        x = centerX - 100 + floorX * 40;
        y = centerY + 100 - floor * 250 / floorCount;
        z = centerY + (Math.random() - 0.5) * 120;
      }
      // Crane structure (20%)
      else if (progress < 0.6) {
        const craneProgress = ((progress - 0.4) / 0.2);
        const craneX = centerX + 180;
        const craneY = centerY - 100;
        
        if (craneProgress < 0.3) {
          // Crane base
          x = craneX - 100 + (craneProgress / 0.3) * 100;
          y = craneY + 150;
        } else if (craneProgress < 0.6) {
          // Boom arm
          const boomP = (craneProgress - 0.3) / 0.3;
          x = craneX - boomP * 200;
          y = craneY - boomP * 100;
        } else {
          // Hook cable
          const hookP = (craneProgress - 0.6) / 0.4;
          x = craneX - 200;
          y = craneY - 100 + hookP * 200;
        }
        z = centerY + (Math.random() - 0.5) * 80;
      }
      // Scaffolding (15%)
      else if (progress < 0.75) {
        const scaffProgress = ((progress - 0.6) / 0.15);
        const scaffX = centerX - 150;
        const levelCount = 8;
        const level = Math.floor(scaffProgress * levelCount);
        
        x = scaffX + (Math.random() - 0.5) * 100;
        y = centerY + 100 - level * 200 / levelCount;
        z = centerY + (Math.random() - 0.5) * 60;
      }
      // Heavy equipment (10%)
      else if (progress < 0.85) {
        const equipProgress = ((progress - 0.75) / 0.1);
        x = centerX + 150 + (Math.random() - 0.5) * 150;
        y = centerY + 150 - equipProgress * 100;
        z = centerY + (Math.random() - 0.5) * 100;
      }
      // Site details (10%)
      else {
        const detailProgress = ((progress - 0.85) / 0.15);
        x = centerX + (Math.random() - 0.5) * 300;
        y = centerY + 150;
        z = centerY + (Math.random() - 0.5) * 150;
      }

      const angle = (i / particles.length) * Math.PI * 2;
      const randomRadius = 450;
      const randomX = centerX + Math.cos(angle) * randomRadius;
      const randomY = centerY + Math.sin(angle) * randomRadius;
      const randomZ = (Math.random() - 0.5) * 500;

      return {
        x: x * influence + randomX * (1 - influence),
        y: y * influence + randomY * (1 - influence),
        z: z * influence + randomZ * (1 - influence),
      };
    });
  },

  detailedBuilding: (scrollPercent, canvasWidth, canvasHeight, particles) => {
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const buildingWidth = 100;
    const buildingHeight = 300;
    const buildingDepth = 100;
    const floors = 12;
    const influence = Math.min(scrollPercent * 3, 1);

    return particles.map((_, i) => {
      const progress = i / particles.length;
      let x, y, z;

      if (progress < 0.2) {
        const floorProgress = (progress / 0.2) * floors;
        const floor = Math.floor(floorProgress);
        const floorOffset = (floorProgress - floor) * (buildingHeight / floors);
        
        x = centerX - buildingWidth / 2;
        y = centerY - buildingHeight / 2 + floor * (buildingHeight / floors) + floorOffset;
        z = centerY + (Math.random() - 0.5) * buildingDepth;
      } else if (progress < 0.4) {
        const floorProgress = ((progress - 0.2) / 0.2) * floors;
        const floor = Math.floor(floorProgress);
        const floorOffset = (floorProgress - floor) * (buildingHeight / floors);
        
        x = centerX + buildingWidth / 2;
        y = centerY - buildingHeight / 2 + floor * (buildingHeight / floors) + floorOffset;
        z = centerY + (Math.random() - 0.5) * buildingDepth;
      } else if (progress < 0.6) {
        const roofProgress = ((progress - 0.4) / 0.2);
        x = centerX - buildingWidth / 2 + roofProgress * buildingWidth;
        y = centerY + buildingHeight / 2;
        z = centerY - buildingDepth / 2 + (Math.random() - 0.5) * buildingDepth;
      } else if (progress < 0.8) {
        const facadeProgress = ((progress - 0.6) / 0.2);
        const floorRow = Math.floor(facadeProgress * floors);
        const columnIndex = Math.floor((i % 20) / 10);
        
        x = centerX - buildingWidth / 2 + columnIndex * buildingWidth;
        y = centerY - buildingHeight / 2 + (floorRow / floors) * buildingHeight;
        z = centerY + buildingDepth / 2;
      } else {
        const baseProgress = ((progress - 0.8) / 0.2);
        x = centerX - buildingWidth / 2 + baseProgress * buildingWidth;
        y = centerY + buildingHeight / 2 + 30;
        z = centerY + (Math.random() - 0.5) * buildingDepth * 1.5;
      }

      const angle = (i / particles.length) * Math.PI * 2;
      const randomRadius = 350;
      const randomX = centerX + Math.cos(angle) * randomRadius;
      const randomY = centerY + Math.sin(angle) * randomRadius;
      const randomZ = (Math.random() - 0.5) * 400;

      return {
        x: x * influence + randomX * (1 - influence),
        y: y * influence + randomY * (1 - influence),
        z: z * influence + randomZ * (1 - influence),
      };
    });
  },

  constructionCrane: (scrollPercent, canvasWidth, canvasHeight, particles) => {
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const influence = Math.min(scrollPercent * 3, 1);

    return particles.map((_, i) => {
      const progress = i / particles.length;
      let x, y, z;

      if (progress < 0.15) {
        const baseProgress = (progress / 0.15);
        x = centerX - 80 + baseProgress * 160;
        y = centerY + 150;
        z = centerY + (Math.random() - 0.5) * 50;
      } else if (progress < 0.3) {
        const towerProgress = ((progress - 0.15) / 0.15);
        x = centerX;
        y = centerY + 150 - towerProgress * 300;
        z = centerY + (Math.random() - 0.5) * 30;
      } else if (progress < 0.6) {
        const boomProgress = ((progress - 0.3) / 0.3);
        x = centerX - 150 + boomProgress * 300;
        y = centerY - 150;
        z = centerY + (Math.random() - 0.5) * 40;
      } else if (progress < 0.8) {
        const cableProgress = ((progress - 0.6) / 0.2);
        const boomTipX = centerX + 150;
        x = boomTipX + (Math.random() - 0.5) * 20;
        y = centerY - 150 + cableProgress * 200;
        z = centerY + (Math.random() - 0.5) * 50;
      } else {
        const counterProgress = ((progress - 0.8) / 0.2);
        x = centerX - 150 + counterProgress * 50;
        y = centerY - 150 + (Math.random() - 0.5) * 50;
        z = centerY + (Math.random() - 0.5) * 80;
      }

      const angle = (i / particles.length) * Math.PI * 2;
      const randomRadius = 350;
      const randomX = centerX + Math.cos(angle) * randomRadius;
      const randomY = centerY + Math.sin(angle) * randomRadius;
      const randomZ = (Math.random() - 0.5) * 400;

      return {
        x: x * influence + randomX * (1 - influence),
        y: y * influence + randomY * (1 - influence),
        z: z * influence + randomZ * (1 - influence),
      };
    });
  },

  excavator: (scrollPercent, canvasWidth, canvasHeight, particles) => {
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const influence = Math.min(scrollPercent * 3, 1);

    return particles.map((_, i) => {
      const progress = i / particles.length;
      let x, y, z;

      if (progress < 0.2) {
        const trackProgress = (progress / 0.2);
        x = centerX - 100 + trackProgress * 200;
        y = centerY + 100;
        z = centerY + (Math.random() - 0.5) * 60;
      } else if (progress < 0.4) {
        const cabinProgress = ((progress - 0.2) / 0.2);
        x = centerX + (Math.random() - 0.5) * 80;
        y = centerY + 100 - cabinProgress * 80;
        z = centerY + (Math.random() - 0.5) * 100;
      } else if (progress < 0.7) {
        const boomProgress = ((progress - 0.4) / 0.3);
        x = centerX + 40 + boomProgress * 180;
        y = centerY - 20 + boomProgress * 40;
        z = centerY + (Math.random() - 0.5) * 50;
      } else if (progress < 0.9) {
        const bucketProgress = ((progress - 0.7) / 0.2);
        x = centerX + 220 + (Math.random() - 0.5) * 40;
        y = centerY + 20 + bucketProgress * 60;
        z = centerY + (Math.random() - 0.5) * 60;
      } else {
        x = centerX + (Math.random() - 0.5) * 200;
        y = centerY + (Math.random() - 0.5) * 100;
        z = centerY + (Math.random() - 0.5) * 100;
      }

      const angle = (i / particles.length) * Math.PI * 2;
      const randomRadius = 350;
      const randomX = centerX + Math.cos(angle) * randomRadius;
      const randomY = centerY + Math.sin(angle) * randomRadius;
      const randomZ = (Math.random() - 0.5) * 400;

      return {
        x: x * influence + randomX * (1 - influence),
        y: y * influence + randomY * (1 - influence),
        z: z * influence + randomZ * (1 - influence),
      };
    });
  },

  skyscraper: (scrollPercent, canvasWidth, canvasHeight, particles) => {
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const influence = Math.min(scrollPercent * 3, 1);

    return particles.map((_, i) => {
      const progress = i / particles.length;
      let x, y, z;

      const floors = 20;
      const floorHeight = 300 / floors;

      if (progress < 0.15) {
        x = centerX - 60 + (progress / 0.15) * 120;
        y = centerY + 150;
        z = centerY + (Math.random() - 0.5) * 80;
      } else if (progress < 0.4) {
        const wallProgress = ((progress - 0.15) / 0.25);
        const floor = Math.floor(wallProgress * floors);
        x = centerX - 60;
        y = centerY + 150 - floor * floorHeight;
        z = centerY - 50 + (Math.random() * 100);
      } else if (progress < 0.65) {
        const wallProgress = ((progress - 0.4) / 0.25);
        const floor = Math.floor(wallProgress * floors);
        x = centerX + 60;
        y = centerY + 150 - floor * floorHeight;
        z = centerY - 50 + (Math.random() * 100);
      } else if (progress < 0.85) {
        const roofProgress = ((progress - 0.65) / 0.2);
        x = centerX - 60 + roofProgress * 120;
        y = centerY - 150;
        z = centerY - 30 + roofProgress * 60;
      } else {
        const spireProgress = ((progress - 0.85) / 0.15);
        x = centerX + (Math.random() - 0.5) * 10;
        y = centerY - 150 - spireProgress * 100;
        z = centerY + (Math.random() - 0.5) * 20;
      }

      const angle = (i / particles.length) * Math.PI * 2;
      const randomRadius = 400;
      const randomX = centerX + Math.cos(angle) * randomRadius;
      const randomY = centerY + Math.sin(angle) * randomRadius;
      const randomZ = (Math.random() - 0.5) * 400;

      return {
        x: x * influence + randomX * (1 - influence),
        y: y * influence + randomY * (1 - influence),
        z: z * influence + randomZ * (1 - influence),
      };
    });
  },

  building: (scrollPercent, canvasWidth, canvasHeight, particles) => {
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const width = 120;
    const height = 250;
    const depth = 100;
    const influence = Math.min(scrollPercent * 3, 1);

    return particles.map((_, i) => {
      const progress = i / particles.length;
      let x, y, z;

      if (progress < 0.25) {
        x = centerX - width / 2;
        y = centerY - height / 2 + (progress / 0.25) * height;
        z = centerY + (Math.random() - 0.5) * depth;
      } else if (progress < 0.5) {
        x = centerX - width / 2 + ((progress - 0.25) / 0.25) * width;
        y = centerY - height / 2;
        z = centerY + (Math.random() - 0.5) * depth;
      } else if (progress < 0.75) {
        x = centerX + width / 2;
        y = centerY - height / 2 + ((progress - 0.5) / 0.25) * height;
        z = centerY + (Math.random() - 0.5) * depth;
      } else {
        x = centerX + width / 2 - ((progress - 0.75) / 0.25) * width;
        y = centerY + height / 2;
        z = centerY + (Math.random() - 0.5) * depth;
      }

      const angle = (i / particles.length) * Math.PI * 2;
      const radius = 250;
      const randomX = centerX + Math.cos(angle) * radius;
      const randomY = centerY + Math.sin(angle) * radius;
      const randomZ = centerY + (Math.random() - 0.5) * 400;

      return {
        x: x * influence + randomX * (1 - influence),
        y: y * influence + randomY * (1 - influence),
        z: z * influence + randomZ * (1 - influence),
      };
    });
  },

  sphere: (scrollPercent, canvasWidth, canvasHeight, particles) => {
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const radius = 200;
    const influence = Math.min(scrollPercent * 3, 1);

    return particles.map((_, i) => {
      const theta = (i / particles.length) * Math.PI * 2;
      const phi = Math.acos(2 * (i / particles.length) - 1);

      const sphereX = centerX + radius * Math.sin(phi) * Math.cos(theta);
      const sphereY = centerY + radius * Math.sin(phi) * Math.sin(theta);
      const sphereZ = radius * Math.cos(phi);

      const angle = theta;
      const randomRadius = 300;
      const randomX = centerX + Math.cos(angle) * randomRadius;
      const randomY = centerY + Math.sin(angle) * randomRadius;
      const randomZ = (Math.random() - 0.5) * 400;

      return {
        x: sphereX * influence + randomX * (1 - influence),
        y: sphereY * influence + randomY * (1 - influence),
        z: sphereZ * influence + randomZ * (1 - influence),
      };
    });
  },

  cube: (scrollPercent, canvasWidth, canvasHeight, particles) => {
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const size = 150;
    const influence = Math.min(scrollPercent * 3, 1);

    return particles.map((_, i) => {
      const progress = (i / particles.length) * 6;
      const faceProgress = progress % 1;
      const face = Math.floor(progress);

      let x, y, z;

      switch (face) {
        case 0:
          x = centerX - size / 2 + faceProgress * size;
          y = centerY;
          z = size / 2;
          break;
        case 1:
          x = centerX - size / 2 + faceProgress * size;
          y = centerY;
          z = -size / 2;
          break;
        case 2:
          x = centerX - size / 2;
          y = centerY - size / 2 + faceProgress * size;
          z = 0;
          break;
        case 3:
          x = centerX + size / 2;
          y = centerY - size / 2 + faceProgress * size;
          z = 0;
          break;
        case 4:
          x = centerX - size / 2 + faceProgress * size;
          y = centerY + size / 2;
          z = 0;
          break;
        default:
          x = centerX - size / 2 + faceProgress * size;
          y = centerY - size / 2;
          z = 0;
      }

      const angle = (i / particles.length) * Math.PI * 2;
      const randomRadius = 350;
      const randomX = centerX + Math.cos(angle) * randomRadius;
      const randomY = centerY + Math.sin(angle) * randomRadius;
      const randomZ = (Math.random() - 0.5) * 400;

      return {
        x: x * influence + randomX * (1 - influence),
        y: y * influence + randomY * (1 - influence),
        z: z * influence + randomZ * (1 - influence),
      };
    });
  },

  // Cliberduche Infinity Logo - Company Logo as Particles
  cLiberducheInfinityLogo: (scrollPercent, canvasWidth, canvasHeight, particles) => {
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    const influence = Math.min(scrollPercent * 3, 1);
    const scale = 120; // Controls size of infinity symbol

    return particles.map((_, i) => {
      const progress = i / particles.length;
      let x, y, z;

      // Create infinity symbol (∞) using Lissajous curve: x = sin(t), y = sin(2t)
      // We'll use a parametric infinity curve instead
      const t = progress * Math.PI * 2; // Full circle from 0 to 2π
      
      // Parametric infinity curve (Lemniscate-like)
      // Form two connected loops
      const a = scale * 1.5; // Horizontal stretch
      const b = scale; // Vertical height
      
      // Using modified infinity parametrization
      const cosT = Math.cos(t);
      const sinT = Math.sin(t);
      const denom = 1 + sinT * sinT;
      
      x = centerX + (a * cosT) / denom;
      y = centerY + (b * sinT * cosT) / denom;
      z = (Math.random() - 0.5) * 80;

      // Add slight wave effect along the curve
      const waveAmplitude = 40;
      y += Math.sin(progress * Math.PI * 4) * waveAmplitude;

      const angle = (i / particles.length) * Math.PI * 2;
      const randomRadius = 450;
      const randomX = centerX + Math.cos(angle) * randomRadius;
      const randomY = centerY + Math.sin(angle) * randomRadius;
      const randomZ = (Math.random() - 0.5) * 500;

      return {
        x: x * influence + randomX * (1 - influence),
        y: y * influence + randomY * (1 - influence),
        z: z * influence + randomZ * (1 - influence),
      };
    });
  },
};
