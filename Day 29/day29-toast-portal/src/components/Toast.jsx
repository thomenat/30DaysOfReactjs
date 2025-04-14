import './Toast.css';
import ToastPortal from './ToastPortal';

const Toast = ({ id, message, type = 'info', onClose }) => {
  return (
    <div className={`toast ${type}`}>
      <span>{message}</span>
      <button className="close-btn" onClick={() => onClose(id)}>✖</button>
    </div>
  );
};

export default Toast;
