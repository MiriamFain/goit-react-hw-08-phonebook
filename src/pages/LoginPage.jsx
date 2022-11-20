import Authorization from 'components/Authorization/Authorization';
import s from './PhonebookPage.module.css';

export const LoginPage = () => {
  return (
    <div className={s.container}>
      <p>Welcome to your </p>
      <h1 className={s.title}>
        Phone<span style={{ color: '#1677ff' }}>Book</span>
      </h1>
      <Authorization isLogin />
    </div>
  );
};

export default LoginPage;
