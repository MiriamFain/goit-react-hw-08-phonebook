import s from './Filter.module.css';
import { selectFilter } from 'store/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterAction } from 'store/filter/slice.filter';

import { Input, Space } from 'antd';
const { Search } = Input;

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div className={s.filter}>
      <Space direction="vertical">
        <Search
          placeholder="Find contact by name"
          className={s.input}
          value={filter}
          enterButton
          size="large"
          onPressEnter={e => dispatch(setFilterAction(e.currentTarget.value))}
          onSearch={e => dispatch(setFilterAction(e.currentTarget.value))}
        />
      </Space>
    </div>
  );
};

export default Filter;
