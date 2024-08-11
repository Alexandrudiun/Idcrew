import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const Computers = ({ isMobile, isVerySmallScreen }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  const scaleValue = isVerySmallScreen ? 0.5 : isMobile ? 0.4 : 0.75;
  const positionValue = isVerySmallScreen
    ? [0, -3, -3]
    : isMobile
    ? [0, -3, -2.2]
    : [0, -3.25, -1.5];

  return (
    <mesh receiveShadow castShadow>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <directionalLight
        intensity={1}
        position={[5, 10, 7]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <primitive
        object={computer.scene}
        scale={scaleValue}
        position={positionValue}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 800px)");
    const verySmallScreenMediaQuery = window.matchMedia("(max-width: 400px)");

    setIsMobile(mobileMediaQuery.matches);
    setIsVerySmallScreen(verySmallScreenMediaQuery.matches);

    const handleMobileMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleVerySmallScreenMediaQueryChange = (event) => {
      setIsVerySmallScreen(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMobileMediaQueryChange);
    verySmallScreenMediaQuery.addEventListener(
      "change",
      handleVerySmallScreenMediaQueryChange
    );

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileMediaQueryChange);
      verySmallScreenMediaQuery.removeEventListener(
        "change",
        handleVerySmallScreenMediaQueryChange
      );
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          mouseButtons={{
            LEFT: 0, // left mouse button
            RIGHT: null, // disable right mouse button
            MIDDLE: 1, // middle mouse button
          }}
        />
        <Computers isMobile={isMobile} isVerySmallScreen={isVerySmallScreen} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};


export default ComputersCanvas;
