import React from 'react'
import { useGLTF } from '@react-three/drei'

type GLTFResult = {
  nodes?:any,
  materials?:any
}

export default function Avion() {
  
  const { nodes, materials }:any = useGLTF('/scene.gltf')
  return ( 
    <mesh geometry={nodes['Body_Plane_0'].geometry} material={materials.Plane} position={[1.7,0,0]}rotation={[0, 0, 0]} scale={0.06}/> 
  )
}

useGLTF.preload('/scene.gltf')