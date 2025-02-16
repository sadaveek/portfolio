import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, SoftShadows, Html} from "@react-three/drei";
import Terminal from "./Terminal";

function Laptop() {
    const { scene } = useGLTF("/laptop.glb");
    const laptopRef = useRef();
    const [largeScreen, setLargeScreen] = useState(window.innerWidth > 1024);
    const [animationCancel, setAnimationCancel] = useState(false);

    scene.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
        }
    });

    useEffect(() => {
        const handleResize = () => setLargeScreen(window.innerWidth > 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const duration = 2500;
    const startTime = useRef(null);
    const delayStart = useRef(null);
    const delay = 5000;

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
                laptopRef.current.position.set(0, 4, 30);
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

            laptopRef.current.position.set(progress * 15, 4 - progress * 3, 30 + progress * -25);
            laptopRef.current.rotation.set(progress * (Math.PI / 15), Math.PI + progress * (9.5 * Math.PI / 2.5), 0);

            if (progress >= 1) {
                laptopRef.current.rotation.set(Math.PI / 15, 2 * Math.PI / 2.5, 0);
                laptopRef.current.position.set(15, 1, 5);
            }
        } else {
            setAnimationCancel(true);
            scene.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = false;
                }
            });
                laptopRef.current.position.set(0, 3, 0);
                laptopRef.current.rotation.set(0, Math.PI, 0);
        }
    });

    return (
        <group ref={laptopRef} className = "absolute top-0 left-0">
            <primitive object={scene} />
        if (laptopRef.current) {
            <Html
                transform
                occlude
                position={[11.5, 14.5, 4.3]}
                rotation={[Math.PI / 15, Math.PI, 0]}
                scale={.5}
            >
                <Terminal />
            </Html>
        }
        </group>
    );
}

export default function LaptopModel() {
    return (
        <div className="absolute bg-palette6 top-0 left-0 h-screen w-full -z-10">
            <Canvas shadows camera={{ position: [0, 17, 50], fov: 50 }} dpr={[1, 2]}>
                <directionalLight
                    position={[-15, 15, 15]}
                    intensity={.8}
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
    );
}