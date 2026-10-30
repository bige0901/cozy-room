import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import BedroomScene from '../scene/BedroomScene.jsx'
import CatModal from './CatModal.jsx'

export default function Home() {
  const [hint, setHint] = useState('')
  const [catOpen, setCatOpen] = useState(false)

  return (
    <>
      <div className="grain" />
      <div className="paper-stroke" />
      <Canvas
        shadows
        camera={{ position: [3.8, 3.2, 5.2], fov: 42 }}
        onPointerMissed={() => setHint('')}
      >
        <Suspense fallback={null}>
          <BedroomScene
            onHover={setHint}
            onLeave={() => setHint('')}
            onCat={() => setCatOpen(true)}
          />
        </Suspense>
      </Canvas>
      <div className="hud">
        <div className="title-card">
          <h1>欢迎来到我的房间</h1>
          <p>中键旋转，滚轮缩放，右键平移。点猫、点床、点书桌。</p>
        </div>
        {hint ? <div className="hover-label">{hint}</div> : null}
        <div className="hint">{hint || '中键旋转整间屋子 · 左键点物体'}</div>
      </div>
      {catOpen ? <CatModal onClose={() => setCatOpen(false)} /> : null}
    </>
  )
}
