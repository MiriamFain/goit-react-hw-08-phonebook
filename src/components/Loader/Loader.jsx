import { MagnifyingGlass } from 'react-loader-spinner';
import s from './Loader.module.css';
export const Loader = () => {
  return (
    <MagnifyingGlass
      wrapperClass={s.loader}
      glassColor="#c0efff"
      color="#000"
      width="250"
    />
  );
};
