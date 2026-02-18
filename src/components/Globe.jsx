import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function PointsGlobe({ speed = 1 }) {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.05 * speed;
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

function WireframeGlobe({ speed = 1 }) {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.05 * speed;
            meshRef.current.rotation.x += delta * 0.01 * speed;
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

function GlobeHitArea({ onHoverChange, onPointerDown, onPointerUp, onPointerMove }) {
    return (
        <mesh
            onPointerEnter={() => onHoverChange(true)}
            onPointerLeave={() => onHoverChange(false)}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerMove={onPointerMove}
        >
            <sphereGeometry args={[2.65, 32, 32]} />
            <meshBasicMaterial transparent={true} opacity={0} depthWrite={false} />
        </mesh>
    );
}

function GlobeScene({ isMobile, rotationSpeed, setIsHovering, scale, targetX, visibilityOffset }) {
    const globeGroupRef = useRef();
    const isDragging = useRef(false);
    const lastX = useRef(0);
    const lastY = useRef(0);
    const [autoRotate, setAutoRotate] = useState(true);

    useFrame((state, delta) => {
        if (globeGroupRef.current) {
            // Auto-rotation
            if (autoRotate && !isDragging.current) {
                globeGroupRef.current.rotation.y += delta * 0.2 * (isMobile ? 1.5 : 1.0) * 0.5;
            }

            // Scroll-driven position
            // Move from Start (left, mostly hidden) to Target (right) over full page scroll
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const totalScrollHeight = document.body.scrollHeight - viewportHeight;
            const progress = Math.min(Math.max(scrollY / totalScrollHeight, 0), 1);

            // Interpolate position
            // startX depends on targetX and screen width.
            // Responsive offset factor to ensure ~25% visibility
            const radius = 2.5 * scale;
            const startX = -targetX - (radius * visibilityOffset);

            // Smooth lerp for position
            globeGroupRef.current.position.x = THREE.MathUtils.lerp(startX, targetX, progress);
        }
    });

    const handlePointerDown = (e) => {
        e.stopPropagation();
        e.target.setPointerCapture(e.pointerId);
        isDragging.current = true;
        lastX.current = e.clientX;
        lastY.current = e.clientY;
        setAutoRotate(false);
    };

    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.target.releasePointerCapture(e.pointerId);
        isDragging.current = false;
        setAutoRotate(true);
    };

    const handlePointerMove = (e) => {
        if (isDragging.current && globeGroupRef.current) {
            e.stopPropagation();
            const deltaX = e.clientX - lastX.current;
            const deltaY = e.clientY - lastY.current;

            globeGroupRef.current.rotation.y += deltaX * 0.005;
            globeGroupRef.current.rotation.x += deltaY * 0.005;

            lastX.current = e.clientX;
            lastY.current = e.clientY;
        }
    };

    return (
        <>
            <group position={[-targetX, 0, 0]} ref={globeGroupRef} scale={[scale, scale, scale]}>
                <PointsGlobe speed={rotationSpeed} />
                <WireframeGlobe speed={rotationSpeed} />
                <Atmosphere />
                <GlobeHitArea
                    onHoverChange={setIsHovering}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerMove={handlePointerMove}
                />
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
        </>
    );
}

export default function Globe() {
    const [isHovering, setIsHovering] = useState(false);
    const [config, setConfig] = useState({
        isMobile: false,
        scale: 1.0,
        targetX: 3.5,
        visibilityOffset: 1.2
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const isMobile = width < 768;
            let scale = 1.0;
            let targetX = 3.5;
            let visibilityOffset = 1.2;

            if (width < 768) {
                scale = 0.6;
                targetX = 1.5;
                visibilityOffset = 0.6;
            } else if (width < 1024) {
                scale = 0.8;
                targetX = 2.5;
                visibilityOffset = 0.6; // Same as mobile for visibility
            }

            setConfig({ isMobile, scale, targetX, visibilityOffset });
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { isMobile, scale, targetX, visibilityOffset } = config;
    const rotationSpeed = isMobile ? 1.5 : 1.0;

    return (
        <div className="absolute inset-0 z-0 w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                style={{ touchAction: 'pan-y' }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#0ea5e9" />
                <GlobeScene
                    isMobile={isMobile}
                    rotationSpeed={rotationSpeed}
                    setIsHovering={setIsHovering}
                    scale={scale}
                    targetX={targetX}
                    visibilityOffset={visibilityOffset}
                />
            </Canvas>
        </div>
    );
}
