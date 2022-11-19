import s from './Loader.module.css';
import { Space, Spin } from 'antd';

export const Loader = () => {
  return (
    <Space size="middle">
      <Spin size="large" className={s.loader} />
    </Space>
  );
};
