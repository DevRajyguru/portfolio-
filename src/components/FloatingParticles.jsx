import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random";
import { useRef, useState } from "react";

export default function FloatingParticles() {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );

  return (
    <Canvas
      camera={{ position: [0, 0, 1] }}
      className="absolute inset-0 -z-10"
    >
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="#14b8a6"
          size={0.01}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </Canvas>
  );
}
