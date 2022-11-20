import s from './Authorization.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserThunk, registerUserThunk } from 'store/auth/thunk.auth';

import {
  LockOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

import { toast } from 'react-toastify';

const Authorization = ({ isLogin, isRegister }) => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const initialUserState = isLogin
    ? { email: '', password: '' }
    : { username: '', email: '', password: '' };

  const [user, setUser] = useState(initialUserState);
  const dispatch = useDispatch();
  const content = isLogin
    ? {
        navigatePath: '/register',
        passwordPlaceholder: 'Password',
        emailPlaceholder: 'E-mail',
      }
    : {
        navigatePath: '/login',
        passwordPlaceholder: 'Min 5 symbols, 1 Num, 1 Upper',
        emailPlaceholder: 'example@mail.com',
      };

  const handleInputChange = e => {
    setUser(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = () => {
    if (isLogin) {
      dispatch(loginUserThunk(user))
        .unwrap()
        .then(() => toast.success('Welcome!'));
    } else {
      dispatch(registerUserThunk(user))
        .unwrap()
        .then(() => toast.success('Welcome!'));
    }
  };

  return (
    <div className={s.container}>
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={e => handleFormSubmit(e)}
        className={s.form}
      >
        {isRegister && (
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              className={s.input}
              onChange={e => handleInputChange(e)}
              value={user.name}
              type="name"
              name="name"
              placeholder="Username"
            />
          </Form.Item>
        )}
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            className={s.input}
            onChange={e => handleInputChange(e)}
            value={user.email}
            type="mail"
            name="email"
            placeholder={content.emailPlaceholder}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            className={s.input}
            onChange={e => handleInputChange(e)}
            value={user.password}
            type="password"
            name="password"
            placeholder={content.passwordPlaceholder}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 5 or more characters"
            iconRender={visible =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            {isLogin ? 'Log in' : 'Sing up'}
          </Button>
          <br />
          <br />
          <span>Or </span>
          <Link className={s.link} to={content.navigatePath}>
            {isLogin ? 'register here!' : 'login here!'}
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Authorization;
