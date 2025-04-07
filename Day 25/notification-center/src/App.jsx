import './App.css'
import NotificationBell from './components/NotificationBell';
import { useDispatch } from 'react-redux';
import { addNotification } from './features/notifications/notificationSlice';


function App() {
  const dispatch = useDispatch();

  const handleAddNotification = () => {
  const messages = [
    'New message received 📩',
    'Friend request pending 👥',
    'System update available ⚙️',
    'Weekly report ready 📊',
    'Security alert 🔐'
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  dispatch(addNotification(randomMessage));
};


  return (
    <>
    <h1>Notification Center</h1>
    <NotificationBell />
    <button onClick={handleAddNotification}>Add Notification</button>
    </>
  )
}

export default App
