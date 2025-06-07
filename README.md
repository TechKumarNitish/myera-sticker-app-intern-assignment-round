`myera-sticker-app-intern-assignment-round`
**"StickerCanvas"**

---


# 🖼️ StickerCanvas – MyEra Internship Assignment

A minimal React + Konva app where users can drag and drop stickers onto a canvas, reposition them freely, and export their creation as a PNG image.

## 🚀 Features

- 🎨 600×400 Konva canvas
- 😀 3 draggable stickers (emoji or PNGs)
- 🖱️ Click a sticker to drop it at a default location
- 🧲 Drag-and-drop enabled across the canvas
- 💾 Download button to export canvas as PNG
- ✂️ Bonus: Double-click to delete a sticker
- 📏 Optional: Snap stickers to 40px grid (toggle logic ready)

## 🔧 Tech Stack

- ⚛️ React (Functional Components)
- 🧱 Konva + react-konva
- 💅 Modular file structure, clean code standards
- 🚫 No backend or data persistence

## 📁 Folder Structure


```md
StickerCanvas/
├── public/
│   └── stickers/
│       ├── emoji1.png
│       ├── emoji2.png
│       └── emoji3.png
├── src/
│   ├── components/
│   |    ├── CanvasBoard/
|   |    |    ├── index.js
│   |    |    └──index.css
│   |    ├── DownloadButton/
|   |    |    ├── index.js
│   |    |    └── index.css
│   |    └── StickerToolbar/
|   |        ├── index.js
│   |        └── index.css
│   |
│   ├── App.jsx
|   ├── App.css
|   ├── index.css
│   └── index.js
├── package.json
└── README.md

````

## 🛠️ Setup

```bash
git clone https://github.com/TechKumarNitish/myera-sticker-app-intern-assignment-round.git
cd myera-sticker-app-intern-assignment-round
npm install
npm start
````

## 📦 Dependencies

* `react-konva`
* `konva`
* `use-image`

Install missing ones if needed:

```bash
npm install react-konva konva use-image
```

## 🧪 Bonus Enhancements

* ✅ Double-click to remove stickers
* ✅ Stickers randomly placed within bounds
* 🧲 Grid snapping support planned (40px step)

## 📸 Demo

> Add a Loom/GIF demo link here if available!

## 🧠 Author

**Nitish Kumar**
📫 [GitHub](https://github.com/TechKumarNitish)

---

© 2025 – Built for MyEra Internship Assignment


---

Let me know if you want a badge-style README or add Netlify deploy instructions!

