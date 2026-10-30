import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

export default function SketchOrbit({ target = [0, 0.9, 0], minDistance = 3, maxDistance = 10 }) {
  return (
    <OrbitControls
      makeDefault
      target={target}
      enableDamping
      dampingFactor={0.08}
      minPolarAngle={0.35}
      maxPolarAngle={1.35}
      minDistance={minDistance}
      maxDistance={maxDistance}
      mouseButtons={{
        LEFT: -1,
        MIDDLE: THREE.MOUSE.ROTATE,
        RIGHT: THREE.MOUSE.PAN,
      }}
      touches={{
        ONE: THREE.TOUCH.ROTATE,
        TWO: THREE.TOUCH.DOLLY_PAN,
      }}
    />
  )
}
