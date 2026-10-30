import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import ToonMesh from './ToonMesh.jsx'

export default function Doll(props) {
  const left = useRef()
  const right = useRef()

  useFrame(({ pointer }) => {
    const x = pointer.x * 0.045
    const y = pointer.y * 0.04
    if (left.current) left.current.position.set(-0.07 + x, 0.06 + y, 0.155)
    if (right.current) right.current.position.set(0.07 + x, 0.06 + y, 0.155)
  })

  return (
    <group {...props}>
      <ToonMesh type="sphere" args={[0.22, 24, 16]} color="#f3c7a4" position={[0, 0.42, 0]} />
      <ToonMesh type="sphere" args={[0.24, 16, 12]} color="#5b4638" position={[0, 0.5, -0.02]} scale={[1.15, 0.7, 1.1]} />
      <ToonMesh type="capsule" args={[0.12, 0.18, 4, 8]} color="#ef8b6a" position={[0, 0.12, 0]} />
      <ToonMesh type="capsule" args={[0.05, 0.16, 4, 8]} color="#f3c7a4" position={[-0.2, 0.16, 0.04]} rotation={[0.4, 0, 0.8]} />
      <ToonMesh type="capsule" args={[0.05, 0.16, 4, 8]} color="#f3c7a4" position={[0.2, 0.16, 0.04]} rotation={[0.4, 0, -0.8]} />
      <ToonMesh type="sphere" args={[0.07, 12, 10]} color="#fff8ef" position={[-0.07, 0.44, 0.14]} />
      <ToonMesh type="sphere" args={[0.07, 12, 10]} color="#fff8ef" position={[0.07, 0.44, 0.14]} />
      <mesh ref={left} position={[-0.07, 0.44, 0.155]}>
        <sphereGeometry args={[0.028, 12, 10]} />
        <meshToonMaterial color="#1c1916" />
      </mesh>
      <mesh ref={right} position={[0.07, 0.44, 0.155]}>
        <sphereGeometry args={[0.028, 12, 10]} />
        <meshToonMaterial color="#1c1916" />
      </mesh>
      <ToonMesh type="sphere" args={[0.02, 8, 8]} color="#e56b7f" position={[-0.14, 0.38, 0.12]} />
      <ToonMesh type="sphere" args={[0.02, 8, 8]} color="#e56b7f" position={[0.14, 0.38, 0.12]} />
    </group>
  )
}
