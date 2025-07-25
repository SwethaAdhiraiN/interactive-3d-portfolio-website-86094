import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows } from '@react-three/drei';

// A custom 3D model (minimal geometric showcase)
function PortfolioModel() {
  return (
    <group>
      <Float floatIntensity={2}>
        <mesh castShadow receiveShadow position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.4, 0]} />
          <meshStandardMaterial color="#00B8D4" metalness={0.7} roughness={0.2} />
        </mesh>
      </Float>
      <mesh position={[2.1, 0, 0]}>
        <torusKnotGeometry args={[0.4, 0.14, 100, 12, 2, 3]} />
        <meshStandardMaterial color="#FFC107" metalness={0.4} roughness={0.5} emissive="#FFC107" emissiveIntensity={0.16} />
      </mesh>
      <mesh position={[-2.1, 0, 0]}>
        <dodecahedronGeometry args={[0.6]} />
        <meshStandardMaterial color="#1A237E" metalness={0.3} roughness={0.6} />
      </mesh>
    </group>
  );
}

// PUBLIC_INTERFACE
function Hero3D() {
  return (
    <div className="hero-canvas-shell">
      <Canvas
        shadows
        camera={{ position: [0, 2, 6], fov: 50 }}
        style={{ height: 340, width: '100%' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[4, 5, 6]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <PortfolioModel />
        <ContactShadows position={[0, -1.7, 0]} opacity={0.4} scale={8} blur={2.5} far={2.5} />
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}

export default Hero3D;
