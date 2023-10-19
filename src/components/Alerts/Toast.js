import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToasts, removeToast } from '../../store';

const Toast = () => {
  const dispatch = useDispatch();
  const toasts = useSelector(selectToasts);

  const handleToastClick = (toast) => {
    dispatch(removeToast(toast.id));
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const toastTimer = setTimeout(() => {
        dispatch(removeToast(toasts[0].id));
      }, 5000);

      return () => {
        clearTimeout(toastTimer);
      };
    }
  }, [dispatch, toasts]);

  return (
    <div className="toasts-container">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="toast"
          onClick={() => handleToastClick(toast)}
        >
          <p>{toast.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Toast;
