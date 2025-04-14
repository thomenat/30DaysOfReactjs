import { useState } from 'react';
import Toast from './components/Toast';

function App() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Toast Notification using React Portal</h1>
      <button onClick={handleShowToast}>
        Show Notification
      </button>

      {showToast && <Toast message="✅ Message sent successfully!" />}
    </div>
  );
}

export default App;
