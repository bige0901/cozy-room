import { useNavigate } from 'react-router-dom'
import SketchOrbit from './SketchOrbit.jsx'
import ToonMesh from './ToonMesh.jsx'

function Hotspot({ label, onHover, onLeave, onActivate, children }) {
  return (
    <group
      onClick={(event) => {
        event.stopPropagation()
        onActivate()
      }}
      onPointerOver={(event) => {
        event.stopPropagation()
        document.body.style.cursor = 'pointer'
        onHover(label)
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto'
        onLeave()
      }}
    >
      {children}
    </group>
  )
}

export default function DeskScene({ onHover, onLeave }) {
  const navigate = useNavigate()

  return (
    <>
      <color attach="background" args={['#d7f1ec']} />
      <hemisphereLight args={['#fff6e8', '#7aa59c', 1.1]} />
      <directionalLight position={[3, 5, 4]} intensity={1.3} color="#fff1d2" />
      <ToonMesh type="box" args={[8, 0.12, 6]} color="#efe6d4" position={[0, -0.06, 0]} outline={1.01} />
      <ToonMesh type="box" args={[8, 3.4, 0.12]} color="#c9ebe6" position={[0, 1.64, -2.4]} outline={1.01} />
      <ToonMesh type="box" args={[2.4, 0.1, 1.2]} color="#e8c7a0" position={[0, 0.9, 0]} />
      <ToonMesh type="box" args={[0.12, 0.9, 0.12]} color="#d7b089" position={[-1.05, 0.45, -0.48]} />
      <ToonMesh type="box" args={[0.12, 0.9, 0.12]} color="#d7b089" position={[1.05, 0.45, -0.48]} />
      <ToonMesh type="box" args={[0.12, 0.9, 0.12]} color="#d7b089" position={[-1.05, 0.45, 0.48]} />
      <ToonMesh type="box" args={[0.12, 0.9, 0.12]} color="#d7b089" position={[1.05, 0.45, 0.48]} />

      <Hotspot label="点电脑，去 page3" onHover={onHover} onLeave={onLeave} onActivate={() => navigate('/page3')}>
        <ToonMesh type="box" args={[0.95, 0.62, 0.08]} color="#dfe6ea" position={[0.12, 1.42, -0.28]} />
        <ToonMesh type="box" args={[0.82, 0.5, 0.03]} color="#6fb7c2" position={[0.12, 1.42, -0.22]} />
        <ToonMesh type="box" args={[0.28, 0.05, 0.34]} color="#cfd6dc" position={[0.12, 0.98, 0.12]} />
      </Hotspot>

      <Hotspot label="点笔记本，去 page4" onHover={onHover} onLeave={onLeave} onActivate={() => navigate('/page4')}>
        <ToonMesh type="box" args={[0.42, 0.03, 0.3]} color="#f4efe4" position={[-0.7, 0.98, 0.18]} rotation={[0, 0.45, 0]} />
        <ToonMesh type="box" args={[0.2, 0.01, 0.28]} color="#f7f7f2" position={[-0.62, 1.0, 0.22]} rotation={[0, 0.45, 0.08]} />
      </Hotspot>

      <Hotspot label="点手机，去 page5" onHover={onHover} onLeave={onLeave} onActivate={() => navigate('/page5')}>
        <ToonMesh type="box" args={[0.12, 0.22, 0.03]} color="#3a6ea5" position={[0.72, 1.08, 0.28]} rotation={[1.15, 0.2, 0.1]} />
        <ToonMesh type="box" args={[0.09, 0.16, 0.01]} color="#9fd3d8" position={[0.72, 1.09, 0.3]} rotation={[1.15, 0.2, 0.1]} />
      </Hotspot>

      <ToonMesh type="cylinder" args={[0.08, 0.1, 0.14, 10]} color="#ef8b6a" position={[-0.95, 1.04, -0.18]} />
      <SketchOrbit target={[0, 1.1, 0]} minDistance={1.8} maxDistance={6} />
    </>
  )
}
