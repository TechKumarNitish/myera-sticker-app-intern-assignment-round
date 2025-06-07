import './App.css';
import React, { useState, useRef } from 'react';
import CanvasBoard from './components/CanvasBoard/index.';
import StickerToolbar from './components/StickerToolbar';
import DownloadButton from './components/DownloadButton';


function App() {
  const stageRef = useRef();
  const [stickers, setStickers] = useState([]);
  const [snapEnabled, setSnapEnabled] = useState(true);

  const snapChangeHandler = () => {
    setSnapEnabled(prevState => !prevState)
  }

  const handleAddSticker = (src) => {
    const x = Math.floor(Math.random() * (400 - 200 + 1)) + 200;  // 200–400
    const y = Math.floor(Math.random() * (300 - 200 + 1)) + 200;  // 200–300  
    const newSticker = {
      id: Date.now(),
      x: x,
      y: y,
      src
    };
    setStickers([...stickers, newSticker]);
  };

  const handleDeleteSticker = (id) => {
    setStickers(stickers.filter(sticker => sticker.id !== id));
  };

  const handleDragEnd = (id, x, y) => {

    console.log("prev: ", x, y)

    if (snapEnabled) {
      x = Math.round(x / 40) * 40;
      y = Math.round(y / 40) * 40;
    }

    console.log("now: ", x, y)

    setStickers(stickers.map(s =>
      s.id === id ? { ...s, x: x, y: y } : s
    ));
  };

  return (
    <div className='bg-container'>
      <div className='main-container'>
        <h1 className='title'><span className='title-part1'>Sticker</span><span className='title-part2'>Canvas</span></h1>
        <p className='description'>
          Drag and drop stickers onto the canvas. Double-click to delete.
          Click a sticker to add it to the canvas.
          Stickers will snap to a 40px grid when dragged.
          Double-click a sticker to delete it.
          Click the button below to download the canvas as an image.
          Click a sticker to add it to the canvas.
        </p>

        <div className='snap-box-container'>
          <input type='checkbox'
            className='snap-check-box'
            checked={snapEnabled}
            onChange={snapChangeHandler}
          />
          <label className='snap-check-box-label'>
            Snap to Grid (40px)
          </label>
        </div>

        <div className='sticker-toolbar'>
          <StickerToolbar onAdd={handleAddSticker} />
          <div style={{ marginLeft: 20 }}>
            <CanvasBoard
              stageRef={stageRef}
              stickers={stickers}
              onDelete={handleDeleteSticker}
              onDragEnd={handleDragEnd}
            />
            <DownloadButton stageRef={stageRef} />
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
