// src/components/StickerToolbar.jsx
import React from 'react';
import "./index.css"

const stickers = [
  { src: '/stickers/emoji1.png', label: '😀' },
  { src: '/stickers/emoji2.png', label: '🔥' },
  { src: '/stickers/emoji3.png', label: '🚀' },
];

const StickerToolbar = ({ onAdd }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {stickers.map((s, i) => (
        <button className='sticker-btn' key={i} onClick={() => onAdd(s.src)} style={{ padding: 6 }}>
          <img className='sticker-btn-img' src={s.src} alt={s.label} width={30} height={30} />
        </button>
      ))}
    </div>
  );
};

export default StickerToolbar;
