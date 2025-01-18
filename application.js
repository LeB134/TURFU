// App.js
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";

const App = () => {
  return (
    <div style={{ height: "100vh", background: "linear-gradient(135deg, #89CFF0, #FF69B4, #D8BFD8)" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        {/* Contrôles de caméra */}
        <OrbitControls enableZoom={false} />
        
        {/* Lumières */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        {/* Sphere 3D (Représentation centrale) */}
        <Sphere visible args={[1, 100, 200]} scale={1.5}>
          <meshStandardMaterial
            attach="material"
            color="#89CFF0"
            roughness={0.5}
            metalness={0.8}
          />
        </Sphere>

        {/* Texte 3D */}
        <Html>
          <div style={{
            color: "#FF69B4",
            fontSize: "24px",
            textAlign: "center",
            fontWeight: "bold",
          }}>
            Truth Terminal Eternal Elisa
          </div>
        </Html>
      </Canvas>
    </div>
  );
};

export default App;

