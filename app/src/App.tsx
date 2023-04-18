import { useState } from 'react'  
import './App.css'
import * as THREE from 'three'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import gsap from "gsap";
import Model from "./components/Model"
import Navbar from './components/Navbar'

function App() {

  const overlayRef = useRef(null)
    useEffect(()=>{
        gsap.to(overlayRef.current,{
        opacity:1,
        duration:4
        })
    },[])

  return (
    <div className="App relative w-full h-full">
        <Navbar/>
        <div className='relative w-full h-full'>
          <div className="w-full h-[1000px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <Model  />
              <Environment preset="city" />
              <ContactShadows frames={2} scale={8} position={[0, -1, 0]} far={1} blur={5} opacity={0.5} color="#204080" />
            </Canvas>
          </div>
          <div ref={overlayRef} className='flex h-full items-center absolute top-0 left-0 opacity-0'>
            <div className="ml-20 mb-20">
              <h1 className='text-8xl font-bold font-bold  '>Samy Basso-Bert</h1>
              <h2 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-500'>Developpeur Web</h2>
            </div>
          </div> 
        </div>
        <div className='flex items-center relative h-[200px]  '>
          <div>
            div 1
          </div>
        </div> 
        <div className='flex items-center relative h-[200px]  '>
          <div>
            div 2
          </div>
        </div> 
    </div>
  )
}

export default App
