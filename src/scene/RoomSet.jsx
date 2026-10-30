import ToonMesh from './ToonMesh.jsx'

function interactHandlers(label, onHover, onLeave, onActivate) {
  return {
    onClick: (event) => {
      event.stopPropagation()
      onActivate?.()
    },
    onPointerOver: (event) => {
      event.stopPropagation()
      document.body.style.cursor = 'pointer'
      onHover?.(label)
    },
    onPointerOut: () => {
      document.body.style.cursor = 'auto'
      onLeave?.()
    },
  }
}

export function RoomShell() {
  return (
    <group>
      <ToonMesh type="box" args={[8.4, 0.12, 7.2]} color="#efe6d4" position={[0, -0.06, 0]} outline={1.01} />
      <ToonMesh type="box" args={[8.4, 4.2, 0.14]} color="#c9ebe6" position={[0, 2.04, -3.5]} outline={1.01} />
      <ToonMesh type="box" args={[0.14, 4.2, 7.2]} color="#d7f1ec" position={[-4.2, 2.04, 0]} outline={1.01} />
      <ToonMesh type="box" args={[0.14, 4.2, 7.2]} color="#bfe3de" position={[4.2, 2.04, 0]} outline={1.01} />
      <ToonMesh type="box" args={[2.6, 2.4, 0.08]} color="#5aa0a8" position={[0.2, 2.35, -3.42]} />
      <ToonMesh type="box" args={[2.2, 2, 0.04]} color="#f3d3a2" position={[0.2, 2.35, -3.38]} />
      <ToonMesh type="sphere" args={[0.18, 16, 12]} color="#fff8ef" position={[-1.8, 3.5, -1.2]} />
      <ToonMesh type="cylinder" args={[0.03, 0.03, 0.5, 8]} color="#d8dde3" position={[-1.8, 3.85, -1.2]} />
      <ToonMesh type="sphere" args={[0.18, 16, 12]} color="#fff8ef" position={[1.9, 3.5, -1.2]} />
      <ToonMesh type="cylinder" args={[0.03, 0.03, 0.5, 8]} color="#d8dde3" position={[1.9, 3.85, -1.2]} />
      <ToonMesh type="cylinder" args={[0.28, 0.34, 0.7, 8]} color="#2f6f8a" position={[-3.2, 0.4, -2.6]} />
      <ToonMesh type="sphere" args={[0.55, 12, 10]} color="#3f9a6b" position={[-3.2, 1.15, -2.6]} />
      <ToonMesh type="sphere" args={[0.42, 10, 8]} color="#2f7d58" position={[-3.45, 1.35, -2.4]} />
      <ToonMesh type="cylinder" args={[0.32, 0.38, 0.8, 8]} color="#245f74" position={[3.2, 0.45, -1.4]} />
      <ToonMesh type="sphere" args={[0.7, 10, 8]} color="#2f8a5a" position={[3.25, 1.35, -1.35]} scale={[1.15, 0.7, 1]} />
      <ToonMesh type="box" args={[0.7, 0.08, 0.28]} color="#7d5a3c" position={[-3.55, 1.7, -1.1]} />
      <ToonMesh type="box" args={[0.18, 0.26, 0.08]} color="#3a6ea5" position={[-3.7, 1.88, -1.1]} />
      <ToonMesh type="box" args={[0.16, 0.22, 0.08]} color="#ef8b6a" position={[-3.52, 1.86, -1.1]} />
    </group>
  )
}

export function Bed({ onHover, onLeave, onActivate }) {
  return (
    <group position={[0.15, 0, 0.35]} {...interactHandlers('点床，去 page2', onHover, onLeave, onActivate)}>
      <ToonMesh type="box" args={[2.8, 0.38, 2.1]} color="#f0d0a4" position={[0, 0.42, 0]} />
      <ToonMesh type="box" args={[2.86, 0.16, 2.16]} color="#f4c089" position={[0, 0.64, 0]} />
      <ToonMesh type="box" args={[1.5, 0.08, 1.2]} color="#4aa392" position={[0.35, 0.74, 0.15]} />
      <ToonMesh type="box" args={[0.9, 0.28, 0.55]} color="#2f5f86" position={[-0.55, 0.86, -0.7]} />
      <ToonMesh type="box" args={[0.7, 0.22, 0.42]} color="#ef8b6a" position={[0.45, 0.84, -0.72]} />
      <ToonMesh type="box" args={[2.7, 0.7, 0.12]} color="#d9dde3" position={[0, 0.7, -1.05]} />
    </group>
  )
}

export function Desk({ onHover, onLeave, onActivate, compact = false }) {
  return (
    <group
      position={compact ? [0, 0, 0] : [2.15, 0, 1.55]}
      rotation={compact ? [0, 0, 0] : [0, -0.35, 0]}
      {...interactHandlers('点书桌，看近景', onHover, onLeave, onActivate)}
    >
      <ToonMesh type="box" args={[1.7, 0.08, 0.85]} color="#e8c7a0" position={[0, 0.82, 0]} />
      <ToonMesh type="box" args={[0.1, 0.82, 0.1]} color="#d7b089" position={[-0.72, 0.41, -0.32]} />
      <ToonMesh type="box" args={[0.1, 0.82, 0.1]} color="#d7b089" position={[0.72, 0.41, -0.32]} />
      <ToonMesh type="box" args={[0.1, 0.82, 0.1]} color="#d7b089" position={[-0.72, 0.41, 0.32]} />
      <ToonMesh type="box" args={[0.1, 0.82, 0.1]} color="#d7b089" position={[0.72, 0.41, 0.32]} />
      <ToonMesh type="box" args={[0.7, 0.42, 0.08]} color="#dfe6ea" position={[0.05, 1.22, -0.18]} />
      <ToonMesh type="box" args={[0.62, 0.34, 0.02]} color="#7fbfc8" position={[0.05, 1.22, -0.13]} />
      <ToonMesh type="box" args={[0.22, 0.04, 0.28]} color="#cfd6dc" position={[0.05, 0.88, 0.12]} />
      <ToonMesh type="box" args={[0.28, 0.02, 0.2]} color="#f7f1e4" position={[-0.42, 0.88, 0.08]} rotation={[0, 0.4, 0]} />
      <ToonMesh type="box" args={[0.1, 0.16, 0.06]} color="#3a6ea5" position={[0.48, 0.96, 0.16]} />
    </group>
  )
}

export function Nightstand() {
  return (
    <group position={[-1.7, 0, 1.35]}>
      <ToonMesh type="box" args={[0.7, 0.55, 0.48]} color="#d9dde3" position={[0, 0.35, 0]} />
      <ToonMesh type="cylinder" args={[0.09, 0.1, 0.12, 10]} color="#3f6f9a" position={[0.16, 0.7, 0.05]} />
      <ToonMesh type="cylinder" args={[0.16, 0.18, 0.16, 10]} color="#2f7d8a" position={[-0.16, 0.2, 0.42]} />
      <ToonMesh type="sphere" args={[0.16, 10, 8]} color="#5bb37a" position={[-0.16, 0.42, 0.42]} />
    </group>
  )
}
