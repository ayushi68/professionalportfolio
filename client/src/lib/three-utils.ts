export const createFloatingGeometry = () => {
  // This will be used for Three.js utilities
  const geometryTypes = [
    'box',
    'sphere', 
    'octahedron',
    'tetrahedron'
  ];
  
  const colors = [
    0x00F5FF, // cyan
    0xFF6B6B, // coral
    0x4ECDC4, // teal
  ];
  
  return { geometryTypes, colors };
};

export const getRandomPosition = (range: number = 20) => {
  return {
    x: (Math.random() - 0.5) * range,
    y: (Math.random() - 0.5) * range,
    z: (Math.random() - 0.5) * range,
  };
};

export const getRandomRotation = () => {
  return {
    x: Math.random() * Math.PI,
    y: Math.random() * Math.PI,
    z: Math.random() * Math.PI,
  };
};
