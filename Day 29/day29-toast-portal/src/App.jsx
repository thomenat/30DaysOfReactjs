import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToastContainer from './components/ToastContainer';

function App() {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'info') => {
    const id = uuidv4();
    const newToast = { id, message, type };
    setToasts(prev => [...prev, newToast]);

    setTimeout(() => {
      removeToast(id);
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Stylish Notification System</h1>
      <button onClick={() => showToast("✅ Success! Data saved.", "success")}>Show Success</button>
      <button onClick={() => showToast("⚠️ Warning: Low storage!", "warning")}>Show Warning</button>
      <button onClick={() => showToast("❌ Error while loading", "error")}>Show Error</button>
      <button onClick={() => showToast("ℹ️ Heads up: this is info", "info")}>Show Info</button>

      <ToastContainer toasts={toasts} onClose={removeToast} />
    </div>
  );
}

export default App;
