import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Html } from "@react-three/drei";
import Terminal from "./Terminal";

function Laptop() {
    const { scene } = useGLTF(import.meta.env.BASE_URL + "laptop.glb");
    const laptopRef = useRef();
    const [largeScreen, setLargeScreen] = useState(true);
    const [animationCancel, setAnimationCancel] = useState(false);

    useMemo(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
            }
        });
    }, [scene]);

    useEffect(() => {
        const handleResize = () => setLargeScreen(window.innerWidth > 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!largeScreen) setAnimationCancel(true);
    }, [largeScreen]);

    const duration = 2500;
    const startTime = useRef(null);
    const delayStart = useRef(null);
    const delay = 4000;

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    useFrame(() => {
        if (!laptopRef.current) return;

        const now = performance.now();

        if (largeScreen) {
            if (animationCancel) {
                laptopRef.current.rotation.set(Math.PI / 15, 2 * Math.PI / 2.5, 0);
                laptopRef.current.position.set(15, 1, 5);
                return;
            }

            if (!startTime.current && !delayStart.current) {
                laptopRef.current.position.set(0, 2, 30);
                laptopRef.current.rotation.set(0, Math.PI, 0);
            }

            if (!startTime.current) {
                if (!delayStart.current) {
                    delayStart.current = now;
                }
                if (now - delayStart.current < delay) return;
                startTime.current = now;
            }

            const elapsed = now - startTime.current;
            const progress = elapsed < duration ? easeInOutQuad(elapsed / duration) : 1;

            laptopRef.current.position.set(progress * 15, 2 + progress, 30 + progress * -25);
            laptopRef.current.rotation.set(progress * (Math.PI / 15), Math.PI + progress * (9.5 * Math.PI / 2.5), 0);

            if (progress >= 1) {
                laptopRef.current.rotation.set(Math.PI / 15, 2 * Math.PI / 2.5, 0);
                laptopRef.current.position.set(15, 3, 5);
            }
        } else {
            laptopRef.current.position.set(0, 3, 0);
            laptopRef.current.rotation.set(0, Math.PI, 0);
        }
    });

    return (
        <group ref={laptopRef} className="absolute top-0 left-0" scale={[1.1, 1.1, 1.1]}>
            <primitive object={scene} />
                <Html
                    transform
                    occlude
                    position={[11.5, 14.5, 4.3]}
                    rotation={[Math.PI / 15, Math.PI, 0]}
                    scale={0.5}
                    pointerEvents= "auto"
                    style= {{zIndex: 0}}
                >
                    <Terminal />
                </Html>
        </group>
    );
}

export default function LaptopModel() {

    const [largeScreen, setLargeScreen] = useState(true);

    useEffect(() => {
        const handleResize = () => setLargeScreen(window.innerWidth > 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
        <div className="absolute bottom-0 left-0 h-[calc(100vh-4rem)] w-full">
            <Canvas shadows camera={{ position: [0, 17, 50], fov: 50 }} dpr={[1, 2]} className = "z-0">
                <directionalLight
                    position={largeScreen ? [-15, 15, 15] : [-5, 5, 15]}
                    intensity={0.8}
                    castShadow
                    shadow-mapSize-width={4096}
                    shadow-mapSize-height={4096}
                    shadow-bias={-0.0001}
                    shadow-camera-near={0.1}
                    shadow-camera-far={100}
                    shadow-camera-left={-30}
                    shadow-camera-right={30}
                    shadow-camera-top={30}
                    shadow-camera-bottom={-30}
                />

                <Laptop />

                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]} receiveShadow>
                    <planeGeometry args={[150, 150]} />
                    <shadowMaterial opacity={0.5} />
                </mesh>

                <Environment preset="night" />
            </Canvas>
        </div>
        </>
    );
}