'use client'

import Image from 'next/image'
import React, { useRef } from 'react'

import { Canvas, useFrame, useLoader } from '@react-three/fiber';

import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useGLTF,OrbitControls,Stats } from '@react-three/drei'

import { LinearFilter, NearestFilter } from 'three';
import  * as THREE from 'three';

function ModelMug(props) {
    const { nodes, materials } = useGLTF('/mug/scene.gltf')
    const newMaterialURL = "/mug/fondotaza.jpg"; // Replace this with your new URL

      
    // Create a new texture loader
    const loader = new TextureLoader();

    // Load the texture from the URL
    loader.load(newMaterialURL, function(texture) {
      
      materials.image_texture.map = texture;
      texture.encoding = THREE.sRGBEncoding;
      texture.flipY = false;
      
    });
    return (
      <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Circle_Material002_0.geometry} material={materials.MUG} />
          <mesh geometry={nodes.Circle_Material002_0002.geometry} material={materials.image_texture} />
        </group>
        <mesh geometry={nodes.Circle001_Material001_0.geometry} material={materials['Material.001']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
    )
  }



export default function Home() {


  const modelUrl = '/mug/scene.gltf'
  return (
    <main className="flex  flex-col items-center justify-between pt-">
      

    
    <Canvas camera={{ position: [5, 3, 7], near: 1.55,zoom: 30 }}
    style={{height: '100vh',width: '100vw'}}
    
    >
      
    <ambientLight intensity={3} />
  <directionalLight position={[3, 4, 5]} />
  <ModelMug position={[0, 0, 0]} />
        <OrbitControls  />
   </Canvas>
    a
    </main>
  )
}

