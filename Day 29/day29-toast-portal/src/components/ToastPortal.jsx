import ReactDOM from 'react-dom';

const ToastPortal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('toast-root')
  );
};

export default ToastPortal;
