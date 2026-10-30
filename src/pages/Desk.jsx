import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import DeskScene from '../scene/DeskScene.jsx'

export default function Desk() {
  const [hint, setHint] = useState('')

  return (
    <>
      <div className="grain" />
      <div className="paper-stroke" />
      <Canvas shadows camera={{ position: [1.6, 2.2, 3.2], fov: 40 }}>
        <Suspense fallback={null}>
          <DeskScene onHover={setHint} onLeave={() => setHint('')} />
        </Suspense>
      </Canvas>
      <div className="hud">
        <Link className="back-link" to="/">
          ← 回到房间
        </Link>
        <div className="title-card" style={{ left: 24, top: 72 }}>
          <h1>书桌近景</h1>
          <p>电脑、笔记本、手机都可以点。页面内容稍后填。</p>
        </div>
        <div className="hint">{hint || '中键旋转 · 点电脑 / 笔记本 / 手机'}</div>
      </div>
    </>
  )
}
