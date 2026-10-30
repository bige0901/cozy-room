import { Link } from 'react-router-dom'

export default function Placeholder({ code, title, hint }) {
  return (
    <div className="placeholder-page">
      <div className="grain" />
      <div className="placeholder-card">
        <span>{code}</span>
        <h1>{title}</h1>
        <p>{hint}</p>
        <p>
          <Link className="back-link" to="/" style={{ position: 'static' }}>
            ← 回到房间
          </Link>
        </p>
      </div>
    </div>
  )
}
