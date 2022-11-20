import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { refreshUserThunk } from 'store/auth/thunk.auth';
import { selectToken, selectUser } from 'store/selectors';
import { AppRoutes } from './routes/AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user && token) {
      dispatch(refreshUserThunk());
    }
  }, [dispatch, user, token]);

  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
};
