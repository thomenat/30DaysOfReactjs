import ToastPortal from './ToastPortal';

const toastStyles = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem 1.5rem',
  borderRadius: '5px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
  zIndex: 9999,
};

const Toast = ({ message }) => {
  return (
    <ToastPortal>
      <div style={toastStyles}>
        {message}
      </div>
    </ToastPortal>
  );
};

export default Toast;
