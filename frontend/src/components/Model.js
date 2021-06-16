import * as THREE from "three"
import React, { useRef, useState } from 'react'
import { Canvas, extend, useFrame, useThree } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Stars } from "@react-three/drei"
import { useGLTF } from '@react-three/drei/core'
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader"


export default function Model(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF(GLTFLoader, 'ouxley.glb')
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.Cylinder004.geometry} material={nodes.Cylinder004.material} />
      </group>
    )
  }
