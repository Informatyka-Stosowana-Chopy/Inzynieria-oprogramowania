import React, { useRef } from 'react'
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { useFBX, Stars } from "@react-three/drei"



extend({OrbitControls})
const Model = () => {

    // useFBX('./FBX')
    // let fbx = useFBX(SpaceStation.fbx)

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
            <Canvas className="model-canvas"
                colorManagement
                camera={{position:[0,0,6], fov: 70}}>
                
                <Stars />
                <ambientLight />
                <mesh>

                    <Controls />

                    <boxBufferGeometry
                        attach="geometry"
                        args={[3,3,3]}>
                    </boxBufferGeometry>

                    <meshBasicMaterial
                        wireframe
                        attach="material" 
                        color="lightblue">
                    </meshBasicMaterial>


                </mesh>
            </Canvas>
        </>
    )
}

export default Model
