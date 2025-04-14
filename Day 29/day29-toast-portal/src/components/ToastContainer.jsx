import './Toast.css';
import ToastPortal from './ToastPortal';
import Toast from './Toast';

const ToastContainer = ({ toasts, onClose }) => {
  return (
    <ToastPortal>
      <div className="toast-container">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={onClose}
          />
        ))}
      </div>
    </ToastPortal>
  );
};

export default ToastContainer;
