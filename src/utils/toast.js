import { ToastContainer as ReactToastContainer, toast } from 'react-toastify';


export const notifySuccess = (message) => {
  if (typeof window === "undefined") return;
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};

export const notifyError = (message) => {
  if (typeof window === "undefined") return;
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};

export const ToastContainer = () => {
  return (
    <ReactToastContainer
      className="easy-unboxing-toast"
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnHover
      draggable
      theme="light"
      toastClassName="easy-unboxing-toast-item"
      bodyClassName="easy-unboxing-toast-body"
      progressClassName="easy-unboxing-toast-progress"
    />
  );
};