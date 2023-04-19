import React , { useState } from 'react'  
import './App.css'
import * as THREE from 'three'
import { useEffect } from 'react'
import { useRef, useMemo } from 'react'
import { Canvas,  useLoader } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import Model from "./components/Model"
import Navbar from './components/Navbar'
import CircleImg from './assets/circle.png'
import { ThemeContext } from './context/themeContext';
function App() {
  const { theme } = React.useContext(ThemeContext);

  
  const Box = () => {
    return (
      <mesh>
        <meshStandardMaterial color="hotpink" />
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
    );
  };
  
  const Particles = () => {
    const imgTex = useLoader(THREE.TextureLoader,CircleImg);
    const count = 300;
  
    const [positions, sizes] = useMemo(() => {
      const positions = new Float32Array(count * 3);
      const sizes = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
        sizes[i] = Math.random() < 0.03 ? 15 : 6;
      }
  
      return [positions, sizes];
    }, []);
  
    return (
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            itemSize={2}
            array={positions}
          />
        </bufferGeometry>
        <pointsMaterial attach={"material"} map={imgTex} size={0.1} sizeAttenuation transparent={false} alphaTest={0.5} opacity={1.0} color={new THREE.Color('#FFFFFF')} />
      </points>
    );
  };

  const overlayRef = useRef(null)
    useEffect(()=>{
        gsap.to(overlayRef.current,{
        opacity:1,
        duration:4
        })
    },[])

  return (
    <div className="App relative w-full h-full  dark:bg-gradient-to-r dark:from-gray-700 dark:to-blue-500">
        <Navbar/>
        <div className='relative w-full h-full'>
          <div className="w-full h-[1000px]">
            <Canvas camera={{ position: [0, -0.2, 5], fov: 50 }} className=''>
              <ambientLight intensity={1} />
              <Model  />
              { theme == 'dark' && <Particles/>}
              <Environment preset="city" />
              <ContactShadows frames={2} scale={8} position={[0, -1, 0]} far={1} blur={5} opacity={0.5} color="#204080" /> 
            </Canvas>
          </div>
          <div ref={overlayRef} className='flex w-full h-full items-center absolute top-0 left-0   opacity-0'>
            <div className="container mx-auto ">
              <h1 className='text-8xl font-bold font-bold dark:text-white'>Samy Basso-Bert</h1>
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
