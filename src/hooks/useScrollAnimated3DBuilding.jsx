import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const useScrollAnimated3DBuilding = (containerRef, isVisible = true) => {
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const buildingRef = useRef(null);
  const scrollYRef = useRef(0);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !isVisible) {
      return;
    }

    // Remove any existing canvas to prevent duplicates
    const existingCanvas = containerRef.current.querySelector('canvas');
    if (existingCanvas) {
      existingCanvas.remove();
    }
    
    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 3, 4);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 0); // Transparent
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Ensure canvas is positioned correctly
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ===== 3D ADVANCED CONSTRUCTION CRANE STRUCTURE =====
    const craneGroup = new THREE.Group();

    // ===== MATERIALS =====
    // RAL 1021 - Rape Yellow (Primary structure)
    const yellowMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFCC00,
      shininess: 90,
      specular: 0xFFDD44,
      flatShading: false,
    });

    // RAL 7035 - Light Grey (Counterweights)
    const lightGreyMaterial = new THREE.MeshPhongMaterial({
      color: 0xCCCCCC,
      shininess: 40,
      specular: 0x888888,
    });

    // RAL 7040 - Window Grey (Machinery)
    const windowGreyMaterial = new THREE.MeshPhongMaterial({
      color: 0x9C9C9C,
      shininess: 70,
      specular: 0xAAAAAA,
    });

    // RAL 3020 - Traffic Red (Safety stripes)
    const redMaterial = new THREE.MeshPhongMaterial({
      color: 0xCC0000,
      shininess: 80,
      specular: 0xFF3333,
    });

    // Galvanized Steel (Hook, sheaves)
    const galvanizedMaterial = new THREE.MeshPhongMaterial({
      color: 0xD3D3D3,
      shininess: 120,
      specular: 0xFFFFFF,
    });

    // Cable/Rope material
    const cableMaterial = new THREE.MeshPhongMaterial({
      color: 0x555555,
      shininess: 60,
      specular: 0x666666,
    });

    // Glass for cab
    const glassMaterial = new THREE.MeshPhongMaterial({
      color: 0x7FB3D5,
      shininess: 200,
      specular: 0xFFFFFF,
      transparent: true,
      opacity: 0.6,
    });

    // ===== TOWER/MAST - Enhanced Lattice Structure =====
    const mastHeight = 5;
    
    // Main vertical columns (4 corners)
    const columnGeometry = new THREE.BoxGeometry(0.15, mastHeight, 0.15);
    const columns = [
      { x: -0.3, z: -0.3 },
      { x: 0.3, z: -0.3 },
      { x: -0.3, z: 0.3 },
      { x: 0.3, z: 0.3 },
    ];

    columns.forEach((col) => {
      const column = new THREE.Mesh(columnGeometry, yellowMaterial);
      column.position.x = col.x;
      column.position.z = col.z;
      column.castShadow = true;
      column.receiveShadow = true;
      craneGroup.add(column);
    });

    // Horizontal cross-bracing (enhanced lattice)
    const braceCount = 10;
    for (let i = 0; i < braceCount; i++) {
      const y = -2.5 + (i / braceCount) * mastHeight;

      // Horizontal ring braces
      const ringGeometry = new THREE.BoxGeometry(0.7, 0.1, 0.7);
      const ring = new THREE.Mesh(ringGeometry, yellowMaterial);
      ring.position.y = y;
      ring.castShadow = true;
      ring.receiveShadow = true;
      craneGroup.add(ring);

      // Diagonal cross-members (X pattern)
      const diagonalGeometry = new THREE.BoxGeometry(0.08, 0.7, 0.08);
      
      const diag1 = new THREE.Mesh(diagonalGeometry, yellowMaterial);
      diag1.position.y = y + 0.2;
      diag1.position.x = 0.2;
      diag1.position.z = -0.2;
      diag1.rotation.z = Math.PI / 4;
      diag1.castShadow = true;
      diag1.receiveShadow = true;
      craneGroup.add(diag1);

      const diag2 = new THREE.Mesh(diagonalGeometry, yellowMaterial);
      diag2.position.y = y + 0.2;
      diag2.position.x = -0.2;
      diag2.position.z = -0.2;
      diag2.rotation.z = -Math.PI / 4;
      diag2.castShadow = true;
      diag2.receiveShadow = true;
      craneGroup.add(diag2);

      const diag3 = new THREE.Mesh(diagonalGeometry, yellowMaterial);
      diag3.position.y = y + 0.2;
      diag3.position.x = 0.2;
      diag3.position.z = 0.2;
      diag3.rotation.z = -Math.PI / 4;
      diag3.castShadow = true;
      diag3.receiveShadow = true;
      craneGroup.add(diag3);

      const diag4 = new THREE.Mesh(diagonalGeometry, yellowMaterial);
      diag4.position.y = y + 0.2;
      diag4.position.x = -0.2;
      diag4.position.z = 0.2;
      diag4.rotation.z = Math.PI / 4;
      diag4.castShadow = true;
      diag4.receiveShadow = true;
      craneGroup.add(diag4);
    }

    // ===== SLEWING UNIT (Top of mast) =====
    const slewingGeometry = new THREE.CylinderGeometry(0.55, 0.55, 0.4, 32);
    const slewing = new THREE.Mesh(slewingGeometry, windowGreyMaterial);
    slewing.position.y = 2.5;
    slewing.castShadow = true;
    slewing.receiveShadow = true;
    craneGroup.add(slewing);

    // ===== OPERATOR'S CAB - Enhanced with glass =====
    // Main cabin body (white)
    const cabBodyGeometry = new THREE.BoxGeometry(0.7, 1, 0.7);
    const cabBodyMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFFFFF,
      shininess: 70,
      specular: 0xFFFFFF,
    });
    const cabBody = new THREE.Mesh(cabBodyGeometry, cabBodyMaterial);
    cabBody.position.y = 2.2;
    cabBody.position.x = -1;
    cabBody.castShadow = true;
    cabBody.receiveShadow = true;
    craneGroup.add(cabBody);

    // Cab windows (glass)
    const windowGeometry = new THREE.BoxGeometry(0.3, 0.4, 0.05);
    const cabWindow1 = new THREE.Mesh(windowGeometry, glassMaterial);
    cabWindow1.position.y = 2.4;
    cabWindow1.position.x = -1.05;
    cabWindow1.position.z = 0.35;
    cabWindow1.castShadow = true;
    cabWindow1.receiveShadow = true;
    craneGroup.add(cabWindow1);

    const cabWindow2 = new THREE.Mesh(windowGeometry, glassMaterial);
    cabWindow2.position.y = 2.4;
    cabWindow2.position.x = -1.05;
    cabWindow2.position.z = -0.35;
    cabWindow2.castShadow = true;
    cabWindow2.receiveShadow = true;
    craneGroup.add(cabWindow2);

    // Safety stripes on cab
    const stripeGeometry = new THREE.BoxGeometry(0.1, 1.05, 0.75);
    const stripe = new THREE.Mesh(stripeGeometry, redMaterial);
    stripe.position.y = 2.2;
    stripe.position.x = -0.75;
    stripe.castShadow = true;
    stripe.receiveShadow = true;
    craneGroup.add(stripe);

    // ===== HORIZONTAL JIB (Boom) - Detailed lattice =====
    const jibLength = 4.5;
    
    // Main jib beam (I-beam style)
    const jibSectionGeometry = new THREE.BoxGeometry(jibLength, 0.35, 0.35);
    const jib = new THREE.Mesh(jibSectionGeometry, yellowMaterial);
    jib.position.y = 2.5;
    jib.position.x = jibLength / 2;
    jib.castShadow = true;
    jib.receiveShadow = true;
    craneGroup.add(jib);

    // Jib lattice bracing
    const jibBraceCount = 15;
    for (let i = 0; i < jibBraceCount; i++) {
      const jibX = -0.5 + (i / jibBraceCount) * jibLength;

      // Vertical supports
      const jibSupportGeometry = new THREE.BoxGeometry(0.2, 0.5, 0.2);
      const jibSupport = new THREE.Mesh(jibSupportGeometry, yellowMaterial);
      jibSupport.position.y = 2.15;
      jibSupport.position.x = jibX;
      jibSupport.castShadow = true;
      jibSupport.receiveShadow = true;
      craneGroup.add(jibSupport);

      // Diagonal bracing
      const jibDiagGeometry = new THREE.BoxGeometry(0.08, 0.4, 0.08);
      const jibDiag = new THREE.Mesh(jibDiagGeometry, yellowMaterial);
      jibDiag.position.y = 2.25;
      jibDiag.position.x = jibX;
      jibDiag.rotation.z = Math.PI / 6;
      jibDiag.castShadow = true;
      jibDiag.receiveShadow = true;
      craneGroup.add(jibDiag);
    }

    // ===== TROLLEY SYSTEM (On jib rails) =====
    const trolleyPosition = jibLength * 0.6;
    const trolleyGeometry = new THREE.BoxGeometry(0.25, 0.25, 0.25);
    const trolley = new THREE.Mesh(trolleyGeometry, windowGreyMaterial);
    trolley.position.y = 2.65;
    trolley.position.x = trolleyPosition;
    trolley.castShadow = true;
    trolley.receiveShadow = true;
    craneGroup.add(trolley);

    // ===== COUNTER-JIB with Counterweights =====
    const counterJibLength = 1.5;
    
    // Counter-jib boom
    const counterJibGeometry = new THREE.BoxGeometry(counterJibLength, 0.3, 0.3);
    const counterJib = new THREE.Mesh(counterJibGeometry, yellowMaterial);
    counterJib.position.y = 2.5;
    counterJib.position.x = -counterJibLength / 2;
    counterJib.castShadow = true;
    counterJib.receiveShadow = true;
    craneGroup.add(counterJib);

    // ===== COUNTERWEIGHTS (Stacked concrete blocks) =====
    const weightBlockGeometry = new THREE.BoxGeometry(0.8, 0.4, 0.6);
    const weightCount = 0;
    for (let i = 0; i < weightCount; i++) {
      const weight = new THREE.Mesh(weightBlockGeometry, lightGreyMaterial);
      weight.position.y = 1.2 + i * 0.42;
      weight.position.x = -1;
      weight.castShadow = true;
      weight.receiveShadow = true;
      craneGroup.add(weight);
    }

    // Counterweight frame (steel)
    const weightFrameGeometry = new THREE.BoxGeometry(1, 1.2, 0.8);
    const weightFrame = new THREE.Mesh(weightFrameGeometry, lightGreyMaterial);
    weightFrame.position.y = 1.2;
    weightFrame.position.x = -1;
    weightFrame.castShadow = true;
    weightFrame.receiveShadow = true;
    craneGroup.add(weightFrame);

    // ===== HOIST WINCH MOTOR HOUSING =====
    const motorGeometry = new THREE.CylinderGeometry(0.25, 0.25, 0.5, 32);
    const motor = new THREE.Mesh(motorGeometry, windowGreyMaterial);
    motor.position.y = 2.5;
    motor.position.x = -0.5;
    motor.rotation.z = Math.PI / 2;
    motor.castShadow = true;
    motor.receiveShadow = true;
    craneGroup.add(motor);

    // ===== CABLE/ROPE SYSTEM =====
    // Main hoist cable from trolley to hook
    const cableLength = 2.5;
    const cableGeometry = new THREE.CylinderGeometry(0.06, 0.06, cableLength, 16);
    const cable = new THREE.Mesh(cableGeometry, cableMaterial);
    cable.position.y = 2.65 - cableLength / 2;
    cable.position.x = trolleyPosition;
    cable.castShadow = true;
    cable.receiveShadow = true;
    craneGroup.add(cable);

    // ===== PULLEY/SHEAVE SYSTEM =====
    const sheaveGeometry = new THREE.TorusGeometry(0.2, 0.08, 16, 32);
    const sheave = new THREE.Mesh(sheaveGeometry, galvanizedMaterial);
    sheave.position.y = 2.65;
    sheave.position.x = trolleyPosition;
    sheave.position.z = 0.3;
    sheave.rotation.z = Math.PI / 2;
    sheave.castShadow = true;
    sheave.receiveShadow = true;
    craneGroup.add(sheave);

    // ===== HOOK ASSEMBLY - Multi-sheave block =====
    // Hook point (actual hook)
    const hookGeometry = new THREE.ConeGeometry(0.2, 0.7, 16);
    const hook = new THREE.Mesh(hookGeometry, galvanizedMaterial);
    hook.position.y = -0.2;
    hook.position.x = trolleyPosition;
    hook.castShadow = true;
    hook.receiveShadow = true;
    craneGroup.add(hook);

    // ===== BASE PLATFORM =====
    const baseGeometry = new THREE.BoxGeometry(2, 0.4, 2);
    const baseMaterial = new THREE.MeshPhongMaterial({
      color: 0x332211,
      shininess: 20,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -2.7;
    base.castShadow = true;
    base.receiveShadow = true;
    craneGroup.add(base);

    // Base safety markings (red and white stripes)
    const whiteMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFFFFF,
      shininess: 30,
    });
    for (let i = 0; i < 4; i++) {
      const baseStripeGeometry = new THREE.BoxGeometry(0.2, 0.05, 2);
      const baseStripe = new THREE.Mesh(baseStripeGeometry, i % 2 === 0 ? redMaterial : whiteMaterial);
      baseStripe.position.y = -2.65;
      baseStripe.position.x = -0.8 + i * 0.5;
      baseStripe.castShadow = true;
      baseStripe.receiveShadow = true;
      craneGroup.add(baseStripe);
    }

    const craneRef = craneGroup;
    craneGroup.scale.set(0.8, 0.8, 0.8);
    scene.add(craneGroup);

    // ===== ENHANCED PHOTOREALISTIC LIGHTING =====
    // Increased ambient for overall visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Primary directional light (Golden hour sunlight)
    const sunLight = new THREE.DirectionalLight(0xFFD700, 1.5);
    sunLight.position.set(8, 10, 5);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 4096;
    sunLight.shadow.mapSize.height = 4096;
    sunLight.shadow.camera.left = -15;
    sunLight.shadow.camera.right = 15;
    sunLight.shadow.camera.top = 15;
    sunLight.shadow.camera.bottom = -15;
    sunLight.shadow.bias = -0.0001;
    scene.add(sunLight);

    // Warm orange fill light (Golden hour atmosphere)
    const warmFillLight = new THREE.PointLight(0xFFA500, 1);
    warmFillLight.position.set(-8, 6, -5);
    scene.add(warmFillLight);

    // Cool backlight for contrast and realism
    const coolBackLight = new THREE.DirectionalLight(0x4488FF, 0.8);
    coolBackLight.position.set(-10, 8, -8);
    scene.add(coolBackLight);

    // Soft rim light for crane edges
    const rimLight = new THREE.PointLight(0xFFFFFF, 0.6);
    rimLight.position.set(0, 5, -10);
    scene.add(rimLight);

    // No background - transparent
    scene.background = null;

    // Handle scroll
    const handleScroll = () => {
      scrollYRef.current = window.scrollY || window.pageYOffset;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      animationIdRef.current = animationId;

      const time = Date.now() * 0.0003;
      const scrollProgress = scrollYRef.current * 0.0005;

      // Crane rotation based on scroll
      craneGroup.rotation.y = scrollProgress;
      
      // Gentle wobble
      craneGroup.rotation.x = Math.sin(time * 0.5) * 0.05;
      craneGroup.rotation.z = Math.cos(time * 0.4) * 0.03;
      
      // Add slight swaying motion like a real crane
      craneGroup.rotation.x += Math.sin(time * 0.3) * 0.02;

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);

      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, [containerRef, isVisible]);

  return null;
};
