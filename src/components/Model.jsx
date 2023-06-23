import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { easing } from "maath";
import { useRef, useState } from "react";
import { Suspense } from "react";

import {
    Lightformer,
    RandomizedLight,
    Environment,
    PerformanceMonitor,
} from "@react-three/drei";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./room.glb");
    const [perfSucks, degrade] = useState(false);

    return (
        <>
            <Suspense fallback={<p>test</p>}>
                <Canvas
                    shadows
                    eventSource={document.getElementById("root")}
                    eventPrefix="client"
                    camera={{
                        position: [50, 24, -150],
                        fov: 45,
                        far: 800,
                        near: 0.1,
                    }}
                >
                    {/*  オブジェクトの設置 */}
                    <primitive object={gltf.scene} position={[0, -2, 0]} />
                    {/*  ライト */}
                    <ambientLight />
                    {/*  キャンバスの背景職 */}
                    <color attach="background" args={["#f0f0f0"]} />
                    <PerformanceMonitor onDecline={() => degrade(true)} />
                    <group position={[0, -0.5, 0]} rotation={[0, -0.75, 0]}>
                        <RandomizedLight
                            position={[0, 10, 0]}
                            intensity={1.0}
                        />
                    </group>
                    <Env perfSucks={perfSucks} />
                </Canvas>
            </Suspense>
        </>
    );
};

function Env({ perfSucks }) {
    const ref = useRef();
    useFrame((state, delta) => {
        // Animate the environment as well as the camera
        if (!perfSucks) {
            easing.damp3(
                ref.current.rotation,
                [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x],
                0.2,
                delta
            );
            //easing.damp3(state.camera.position, [Math.sin(state.pointer.x / 4) * 9, 1.25 + state.pointer.y, Math.cos(state.pointer.x / 4) * 9], 1, delta)
            easing.damp3(state.camera.position, [-30, 24, -30], 0.5, delta);
            easing.damp3(
                state.camera.position,
                [
                    Math.sin(state.pointer.x) * -30,
                    1.25 + state.pointer.y * 20,
                    Math.cos(state.pointer.x) * -30,
                ],
                0.5,
                delta
            );
            //console.log(state.pointer.x)

            state.camera.lookAt(0, 4, 0);
        }
    });
    // Runtime environments can be too slow on some systems, better safe than sorry with PerfMon
    return (
        <Environment
            frames={perfSucks ? 1 : Infinity}
            preset="city"
            resolution={256}
            background
            blur={0.8}
        >
            <Lightformer
                intensity={4}
                rotation-x={Math.PI / 2}
                position={[0, 5, -9]}
                scale={[10, 10, 1]}
            />
            <Lightformer
                intensity={4}
                rotation-x={Math.PI / 2}
                position={[0, 5, -9]}
                scale={[10, 10, 1]}
            />
            <group rotation={[Math.PI / 2, 1, 0]}>
                {[2, -2, 2, -4, 2, -5, 2, -9].map((x, i) => (
                    <Lightformer
                        key={i}
                        intensity={1}
                        rotation={[Math.PI / 4, 0, 0]}
                        position={[x, 4, i * 4]}
                        scale={[4, 1, 1]}
                    />
                ))}
                <Lightformer
                    intensity={0.5}
                    rotation-y={Math.PI / 2}
                    position={[-5, 1, -1]}
                    scale={[50, 2, 1]}
                />
                <Lightformer
                    intensity={0.5}
                    rotation-y={Math.PI / 2}
                    position={[-5, -1, -1]}
                    scale={[50, 2, 1]}
                />
                <Lightformer
                    intensity={0.5}
                    rotation-y={-Math.PI / 2}
                    position={[10, 1, 0]}
                    scale={[50, 2, 1]}
                />
            </group>
            <group ref={ref}>
                <Lightformer
                    intensity={5}
                    form="ring"
                    color="#FF0300"
                    rotation-y={Math.PI / 2}
                    position={[-5, 2, -1]}
                    scale={[10, 10, 1]}
                />
            </group>
        </Environment>
    );
}

export default Model;
