import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Environment, Stage } from "@react-three/drei";

import { Toyota_Rav4 } from "./models/2023_rav4";

const ModelViewer = () => {
  const [webglSupported, setWebglSupported] = useState(true);

  // Device Support checking
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      if (!gl) setWebglSupported(false);
    } catch (error) {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported)
    return <div>WebGL غير مدعوم على هذا الجهاز.</div>;

  return (
    <Canvas
      camera={{ position: [5, 2, 5], fov: 35 }}
      gl={{
        antialias: true,
        powerPreference: "high-performance",
      }}
      style={{ width: "100%", height: "100%" }}
      onCreated={({ gl }) => {
        gl.getContext().canvas.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          alert("تم فقدان سياق WebGL - يرجى إعادة تحميل الصفحة.");
        });
      }}
    >
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
          <Toyota_Rav4 />
        </Stage>
        {/* Lighting */}
        <Environment preset="city" />
        {/* Controls: Scene UX */}
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={1}
          minDistance={6}
          maxDistance={12}
          maxPolarAngle={Math.PI / 2 - 0.1}
        />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
