import { useEffect, useRef } from 'react';
import { createFloatingGeometry, getRandomPosition, getRandomRotation } from '@/lib/three-utils';

const ThreeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const meshesRef = useRef<any[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadThreeJS = async () => {
      // Dynamically import Three.js to avoid SSR issues
      const THREE = await import('three');
      
      if (!canvasRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current,
        alpha: true 
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      
      sceneRef.current = scene;
      rendererRef.current = renderer;
      
      // Create floating geometric shapes
      const geometries = [
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.SphereGeometry(0.5, 32, 32),
        new THREE.OctahedronGeometry(0.7),
        new THREE.TetrahedronGeometry(0.8)
      ];
      
      const materials = [
        new THREE.MeshBasicMaterial({ color: 0x00F5FF, wireframe: true, transparent: true, opacity: 0.3 }),
        new THREE.MeshBasicMaterial({ color: 0xFF6B6B, wireframe: true, transparent: true, opacity: 0.3 }),
        new THREE.MeshBasicMaterial({ color: 0x4ECDC4, wireframe: true, transparent: true, opacity: 0.3 })
      ];
      
      const meshes: any[] = [];
      
      for (let i = 0; i < 20; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const material = materials[Math.floor(Math.random() * materials.length)];
        const mesh = new THREE.Mesh(geometry, material);
        
        const position = getRandomPosition();
        mesh.position.set(position.x, position.y, position.z);
        
        const rotation = getRandomRotation();
        mesh.rotation.set(rotation.x, rotation.y, rotation.z);
        
        scene.add(mesh);
        meshes.push(mesh);
      }
      
      meshesRef.current = meshes;
      camera.position.z = 5;
      
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        
        meshes.forEach(mesh => {
          mesh.rotation.x += 0.005;
          mesh.rotation.y += 0.005;
          mesh.position.y += Math.sin(Date.now() * 0.001 + mesh.position.x) * 0.001;
        });
        
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Mouse movement effect
      let mouseX = 0;
      let mouseY = 0;
      
      const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        
        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
        camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
      };
      
      document.addEventListener('mousemove', handleMouseMove);
      
      // Handle window resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    };

    loadThreeJS();
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ThreeBackground;
