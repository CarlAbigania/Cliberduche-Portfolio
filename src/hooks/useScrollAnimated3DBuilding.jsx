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

    // Metallic paint material for better realism
    const metallicYellow = new THREE.MeshStandardMaterial({
      color: 0xFFCC00,
      metalness: 0.4,
      roughness: 0.3,
    });

    // Bolt/rivet material
    const boltMaterial = new THREE.MeshPhongMaterial({
      color: 0x444444,
      shininess: 50,
      specular: 0x666666,
    });

    // Chain material
    const chainMaterial = new THREE.MeshPhongMaterial({
      color: 0x2a2a2a,
      shininess: 30,
      specular: 0x555555,
    });

    // Concrete material for base
    const concreteMaterial = new THREE.MeshPhongMaterial({
      color: 0x4a4a4a,
      shininess: 10,
      specular: 0x333333,
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

    // ===== CARGO/LOAD BEING LIFTED =====
    // Container box
    const cargoGeometry = new THREE.BoxGeometry(0.5, 0.4, 0.5);
    const cargoMaterial = new THREE.MeshPhongMaterial({
      color: 0xFF6B35,
      shininess: 30,
      specular: 0xFFAA66,
    });
    const cargo = new THREE.Mesh(cargoGeometry, cargoMaterial);
    cargo.position.y = -0.8;
    cargo.position.x = trolleyPosition;
    cargo.castShadow = true;
    cargo.receiveShadow = true;
    craneGroup.add(cargo);

    // Cargo lifting straps
    for (let i = 0; i < 4; i++) {
      const strapGeometry = new THREE.BoxGeometry(0.05, 0.5, 0.05);
      const strapMaterial = new THREE.MeshPhongMaterial({
        color: 0x333333,
        shininess: 20,
      });
      const strap = new THREE.Mesh(strapGeometry, strapMaterial);
      strap.position.y = -0.1;
      strap.position.x = trolleyPosition + (i < 2 ? 0.2 : -0.2);
      strap.position.z = (i % 2 === 0 ? 0.2 : -0.2);
      strap.castShadow = true;
      strap.receiveShadow = true;
      craneGroup.add(strap);
    }

    // ===== BASE PLATFORM =====
    const baseGeometry = new THREE.BoxGeometry(2, 0.4, 2);
    const baseMaterial = new THREE.MeshPhongMaterial({
      color: 0x4a4a4a,
      shininess: 10,
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -2.7;
    base.castShadow = true;
    base.receiveShadow = true;
    craneGroup.add(base);

    // Base reinforcement (concrete foundation layers)
    const foundationGeometry = new THREE.BoxGeometry(2.3, 0.2, 2.3);
    const foundation = new THREE.Mesh(foundationGeometry, baseMaterial);
    foundation.position.y = -3.0;
    foundation.castShadow = true;
    foundation.receiveShadow = true;
    craneGroup.add(foundation);

    // Base corner reinforcements
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const x = Math.cos(angle) * 0.9;
      const z = Math.sin(angle) * 0.9;
      
      const reinforcementGeometry = new THREE.BoxGeometry(0.15, 0.5, 0.15);
      const reinforcement = new THREE.Mesh(reinforcementGeometry, new THREE.MeshPhongMaterial({
        color: 0x555555,
        shininess: 40,
      }));
      reinforcement.position.set(x, -2.45, z);
      reinforcement.castShadow = true;
      reinforcement.receiveShadow = true;
      craneGroup.add(reinforcement);
    }

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
    // Ambient light - soft and subtle
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Primary directional light (Golden hour sunlight) - stronger
    const sunLight = new THREE.DirectionalLight(0xFFD700, 2);
    sunLight.position.set(10, 12, 8);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 4096;
    sunLight.shadow.mapSize.height = 4096;
    sunLight.shadow.camera.left = -20;
    sunLight.shadow.camera.right = 20;
    sunLight.shadow.camera.top = 20;
    sunLight.shadow.camera.bottom = -20;
    sunLight.shadow.bias = -0.0002;
    sunLight.shadow.normalBias = 0.02;
    scene.add(sunLight);

    // Warm orange fill light - enhanced
    const warmFillLight = new THREE.PointLight(0xFFA500, 1.5);
    warmFillLight.position.set(-10, 8, -6);
    scene.add(warmFillLight);

    // Cool backlight for contrast
    const coolBackLight = new THREE.DirectionalLight(0x4488FF, 1.2);
    coolBackLight.position.set(-12, 10, -10);
    scene.add(coolBackLight);

    // Soft rim light for edges
    const rimLight = new THREE.PointLight(0xFFFFFF, 0.8);
    rimLight.position.set(0, 6, -12);
    scene.add(rimLight);

    // Ground reflection light
    const groundLight = new THREE.PointLight(0xFFFFFF, 0.5);
    groundLight.position.set(0, -1, 0);
    scene.add(groundLight);

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

      // Crane rotation based on scroll - main rotation
      craneGroup.rotation.y = scrollProgress;
      
      // Realistic wobble and sway - like a real crane in wind
      const windSway = Math.sin(time * 0.3) * 0.08;
      const wobble = Math.cos(time * 0.5) * 0.04;
      
      craneGroup.rotation.x = windSway;
      craneGroup.rotation.z = wobble + Math.sin(time * 0.2) * 0.03;
      
      // Add slight position sway
      craneGroup.position.y = Math.sin(time * 0.4) * 0.05;
      craneGroup.position.x = Math.cos(time * 0.35) * 0.03;
      
      // Camera slight orbit for better view
      const cameraOrbit = scrollProgress * 0.3;
      cameraRef.current.position.x = 4 + Math.sin(cameraOrbit) * 1;
      cameraRef.current.position.z = 4 + Math.cos(cameraOrbit) * 1;

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
