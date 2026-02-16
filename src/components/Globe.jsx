import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";

function PointsGlobe() {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <points ref={meshRef}>
            <sphereGeometry args={[2.5, 64, 64]} />
            <pointsMaterial
                color="#0ea5e9"
                size={0.02}
                sizeAttenuation={true}
                transparent={true}
                opacity={0.8}
            />
        </points>
    );
}

function WireframeGlobe() {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.05;
            meshRef.current.rotation.x += delta * 0.01;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[2.48, 32, 32]} />
            <meshBasicMaterial
                color="#0284c7"
                wireframe={true}
                transparent={true}
                opacity={0.1}
            />
        </mesh>
    );
}

function Atmosphere() {
    return (
        <mesh>
            <sphereGeometry args={[2.6, 64, 64]} />
            <meshBasicMaterial
                color="#0ea5e9"
                transparent={true}
                opacity={0.1}
                side={THREE.BackSide}
            />
        </mesh>
    );
}

export default function Globe() {
    return (
        <div className="absolute inset-0 z-0 w-full h-full">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#0ea5e9" />

                <group position={[-3.5, 0, 0]}>
                    <PointsGlobe />
                    <WireframeGlobe />
                    <Atmosphere />
                </group>

                <Stars
                    radius={100}
                    depth={50}
                    count={5000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={1}
                />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
}
