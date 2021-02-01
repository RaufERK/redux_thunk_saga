import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFoxPicAction } from '../redux/picture';
const ThunkPic = () => {
  const thunkPic = useSelector((store) => store.picture.thunkPic);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoxPicAction());
  }, []);
  return (
    <div onClick={() => dispatch(getFoxPicAction())}>
      <h1>Thunk Pic</h1>
      <img src={thunkPic} alt="FOXES" width="100%" />
    </div>
  );
};
export default ThunkPic;
