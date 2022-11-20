import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import SharedLayout from 'components/SharedLayout/SharedLayout';
const PhonebookPage = lazy(() => import('pages/PhonebookPage'));

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PhonebookPage />} />
        </Route>
      </Route>
      <Route path="/" element={<PublicRoute />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
