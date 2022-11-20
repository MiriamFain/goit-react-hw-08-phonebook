import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken } from 'store/selectors';

const PublicRoute = () => {
  const token = useSelector(selectToken);
  return token ? (
    <Navigate to="/" />
  ) : (
    <Suspense fallback="Wait a moment....">
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;
