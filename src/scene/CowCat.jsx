import ToonMesh from './ToonMesh.jsx'

export default function CowCat({ onActivate, onHover, onLeave, ...props }) {
  return (
    <group
      {...props}
      onClick={(event) => {
        event.stopPropagation()
        onActivate?.()
      }}
      onPointerOver={(event) => {
        event.stopPropagation()
        document.body.style.cursor = 'pointer'
        onHover?.('点我看猫片')
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto'
        onLeave?.()
      }}
    >
      <ToonMesh type="sphere" args={[0.28, 24, 16]} color="#f7f4ee" position={[0, 0.28, 0.02]} scale={[1.15, 0.85, 1.35]} />
      <ToonMesh type="sphere" args={[0.22, 24, 16]} color="#f7f4ee" position={[0.02, 0.52, 0.18]} />
      <ToonMesh type="cone" args={[0.08, 0.14, 4]} color="#f7f4ee" position={[-0.12, 0.7, 0.16]} rotation={[0.2, 0, -0.35]} />
      <ToonMesh type="cone" args={[0.08, 0.14, 4]} color="#1c1916" position={[0.14, 0.7, 0.16]} rotation={[0.2, 0, 0.4]} />
      <ToonMesh type="sphere" args={[0.12, 16, 12]} color="#1c1916" position={[0.1, 0.56, 0.28]} scale={[1.1, 0.8, 0.55]} />
      <ToonMesh type="sphere" args={[0.1, 12, 10]} color="#1c1916" position={[-0.12, 0.3, -0.08]} scale={[1.4, 0.7, 1]} />
      <ToonMesh type="sphere" args={[0.09, 12, 10]} color="#1c1916" position={[0.16, 0.22, 0.08]} />
      <ToonMesh type="capsule" args={[0.045, 0.42, 4, 8]} color="#f7f4ee" position={[-0.18, 0.22, -0.22]} rotation={[1.1, 0.4, 0.6]} />
      <ToonMesh type="sphere" args={[0.06, 10, 8]} color="#1c1916" position={[-0.34, 0.18, -0.42]} />
      <ToonMesh type="sphere" args={[0.035, 8, 8]} color="#1c1916" position={[-0.05, 0.54, 0.36]} />
      <ToonMesh type="sphere" args={[0.035, 8, 8]} color="#1c1916" position={[0.16, 0.54, 0.34]} />
      <ToonMesh type="sphere" args={[0.028, 8, 8]} color="#f2a0b6" position={[0.02, 0.48, 0.38]} />
    </group>
  )
}
