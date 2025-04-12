import React from 'react';
import MousePosition from './MousePosition';
import './App.css';

function App() {
  const imageWidth = 400;
  const zoomLevel = 2; // 2x zoom


  return (
    <div className="App">
      <h1>🔍 True Image Magnifier</h1>

      <MousePosition render={({ x, y }) => (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src="/times-square.jpg"
            alt="Zoomable"
            width={imageWidth}
            style={{ display: 'block' }}
          />

           {/* Magnifier */}
          <div
            style={{
              position: 'absolute',
              top: y - 50,
              left: x - 50,
              width: 100,
              height: 100,
              borderRadius: '50%',
              backgroundImage: `url(/times-square.jpg)`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${imageWidth * zoomLevel}px auto`,
              backgroundPosition: `-${x * zoomLevel - 50}px -${y * zoomLevel - 50}px`,
              border: '2px solid #fff',
              boxShadow: '0 0 10px rgba(0,0,0,0.5)',
              pointerEvents: 'none',
            }}
          />
        </div>
      )} />
    </div>
  );
};

export default App;