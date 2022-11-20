import Authorization from 'components/Authorization/Authorization';
import s from './PhonebookPage.module.css';

const RegisterPage = () => {
  return (
    <div className={s.container}>
      <p>Welcome to your </p>
      <h1 className={s.title}>
        Phone<span style={{ color: '#1677ff' }}>Book</span>
      </h1>
      <Authorization isRegister />
    </div>
  );
};
export default RegisterPage;
