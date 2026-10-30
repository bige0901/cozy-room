import { useMemo } from 'react'
import * as THREE from 'three'

function makeGeometry(type, args) {
  switch (type) {
    case 'sphere':
      return new THREE.SphereGeometry(...args)
    case 'cylinder':
      return new THREE.CylinderGeometry(...args)
    case 'cone':
      return new THREE.ConeGeometry(...args)
    case 'capsule':
      return new THREE.CapsuleGeometry(...args)
    case 'torus':
      return new THREE.TorusGeometry(...args)
    case 'plane':
      return new THREE.PlaneGeometry(...args)
    default:
      return new THREE.BoxGeometry(...args)
  }
}

export default function ToonMesh({
  type = 'box',
  args = [1, 1, 1],
  color = '#ffffff',
  outline = 1.055,
  outlineColor = '#1c1916',
  ...props
}) {
  const key = `${type}:${args.join(',')}`
  const geometry = useMemo(() => makeGeometry(type, args), [key])

  return (
    <group {...props}>
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshToonMaterial color={color} />
      </mesh>
      <mesh geometry={geometry} scale={outline}>
        <meshBasicMaterial color={outlineColor} side={THREE.BackSide} />
      </mesh>
    </group>
  )
}
