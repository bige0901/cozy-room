import { useNavigate } from 'react-router-dom'
import SketchOrbit from './SketchOrbit.jsx'
import CowCat from './CowCat.jsx'
import Doll from './Doll.jsx'
import { Bed, Desk, Nightstand, RoomShell } from './RoomSet.jsx'

export default function BedroomScene({ onHover, onLeave, onCat }) {
  const navigate = useNavigate()

  return (
    <>
      <color attach="background" args={['#c9ebe6']} />
      <hemisphereLight args={['#fff6e8', '#7aa59c', 1.05]} />
      <directionalLight
        position={[5, 8, 4]}
        intensity={1.35}
        color="#fff1d2"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[0.2, 2.4, -3.1]} intensity={0.55} color="#ffd39a" />
      <RoomShell />
      <Bed onHover={onHover} onLeave={onLeave} onActivate={() => navigate('/page2')} />
      <Desk onHover={onHover} onLeave={onLeave} onActivate={() => navigate('/desk')} />
      <Nightstand />
      <Doll position={[0.55, 0.68, 0.2]} rotation={[0, -0.5, 0]} scale={0.95} />
      <CowCat
        position={[-0.55, 0.68, 0.55]}
        rotation={[0, 0.7, 0]}
        onHover={onHover}
        onLeave={onLeave}
        onActivate={onCat}
      />
      <SketchOrbit />
    </>
  )
}
