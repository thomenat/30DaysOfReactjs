import React from 'react';
import MousePosition from './MousePosition';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>🖼️ Image Magnifier</h1>
      <MousePosition render={({ x, y }) => (
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <img
            src="/times-square.jpg"
            alt="Zoomable"
            style={{ width: '400px', height: 'auto' }}
          />
          <div
            style={{
              position: 'absolute',
              top: y - 25,
              left: x - 25,
              width: 50,
              height: 50,
              borderRadius: '50%',
              backgroundColor: 'rgba(0,0,0,0.3)',
              pointerEvents: 'none',
            }}
          />
        </div>
      )} />
    </div>
  );
}

export default App;
