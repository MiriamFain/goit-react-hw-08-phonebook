import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import s from './SharedLayout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'store/auth/thunk.auth';

import { BiExit } from 'react-icons/bi';
import { selectUser } from 'store/selectors';
import { Link } from 'react-router-dom';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userName =
    user && user.name[0].toUpperCase() + user.name.slice(1).toLowerCase();

  const handleExit = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <>
      <header className={s.bar}>
        <Link to="/" className={s.logo}>
          <h3 className={s.title} style={{ color: '#000' }}>
            Phone<span style={{ color: '#1677ff' }}>Book</span>
          </h3>
        </Link>
        <p className={s.user}>
          Welcome,
          <span className={s.name} style={{ color: '#1677ff' }}>
            {' '}
            {userName}
          </span>
        </p>
        <button type="button" onClick={handleExit} className={s.exit}>
          <BiExit className={s.exitIcon} />
        </button>
      </header>
      <div className={s.layout}>
        <main className={s.main}>
          <Suspense fallback="Wait a moment....">
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default SharedLayout;
