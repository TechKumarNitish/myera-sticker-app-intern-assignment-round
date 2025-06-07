// src/components/CanvasBoard.jsx
import React from 'react';
import "./index.css"
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

const Sticker = ({ sticker, onDelete, onDragEnd }) => {
  const [image] = useImage(sticker.src);

  return (
    <KonvaImage
      image={image}
      x={sticker.x}
      y={sticker.y}
      width={60}
      height={60}
      draggable
      onDblClick={() => onDelete(sticker.id)}
      onDragEnd={(e) => onDragEnd(sticker.id, e.target.x(), e.target.y())}
    />
  );
};

const CanvasBoard = ({ stageRef, stickers, onDelete, onDragEnd }) => {
  return (
    <Stage width={600} height={400} ref={stageRef} className='canvas-stage'>
      <Layer>
        {stickers.map((sticker) => (
          <Sticker
            key={sticker.id}
            sticker={sticker}
            onDelete={onDelete}
            onDragEnd={onDragEnd}
          />
        ))}
      </Layer>
    </Stage>
  );
};

export default CanvasBoard;
