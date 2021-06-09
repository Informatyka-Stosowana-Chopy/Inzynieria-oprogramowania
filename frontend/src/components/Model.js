import React, { useRef } from 'react'
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({OrbitControls})
const Model = () => {

    const Controls = () => {

        const controls = useRef()

        const {camera,gl} = useThree()

        useFrame(() => {
            controls.current.update()
        })

        return (
            <orbitControls
                ref = {controls}
                autoRotate
                 args={[camera, gl.domElement]}>

            </orbitControls>
        )
    }

    return (
        <>
            <Canvas className="model-canvas">
                <mesh>

                    <Controls />

                    <boxBufferGeometry
                        attach="geometry"
                        args={[3,3,3]}>
                    </boxBufferGeometry>

                    <meshBasicMaterial
                        wireframe
                        attach="material" 
                        color="white">
                    </meshBasicMaterial>


                </mesh>
            </Canvas>
        </>
    )
}

export default Model
