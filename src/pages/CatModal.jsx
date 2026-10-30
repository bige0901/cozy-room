export default function CatModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-labelledby="cat-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="close-btn" type="button" onClick={onClose} aria-label="关闭">
          ×
        </button>
        <h2 id="cat-title">奶牛猫相册</h2>
        <p>照片素材稍后放进来。现在先占个位置，点外面或叉号就能关掉。</p>
        <div className="photo-grid">
          <div className="photo-slot">照片 1<br />等你发图</div>
          <div className="photo-slot">照片 2<br />等你发图</div>
          <div className="photo-slot">照片 3<br />等你发图</div>
        </div>
      </div>
    </div>
  )
}
