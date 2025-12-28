import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float, Stars, Html } from '@react-three/drei'

function AnimatedSphere() {
  const meshRef = useRef()
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.12
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.08
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[1.1, 64, 64]} scale={2.6} position={[2, -1, -2]}>
        <MeshDistortMaterial color="#8B7FD4" distort={0.6} speed={1.2} metalness={0.6} />
      </Sphere>
    </Float>
  )
}

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <color attach="background" args={['#0a061f']} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#B4A5F1" />
      <Stars radius={100} depth={60} count={1200} factor={4} saturation={0} fade speed={0.6} />
      <AnimatedSphere />
    </Canvas>
  )
}