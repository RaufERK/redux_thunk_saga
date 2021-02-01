import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkListAction } from '../redux/todoList';
const ThunkList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);

  useEffect(() => {
    dispatch(thunkListAction());
  }, []);
  
  return (
    <div>
      <h1>Thunk List</h1>
      <ul>
        {todoList.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </div>
  );
};
export default ThunkList;
