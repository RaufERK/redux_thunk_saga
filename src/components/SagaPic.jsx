import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RUN_SAGA } from '../redux/picture';

const catApi = 'https://api.thecatapi.com/v1/images/search';

const SagaPic = () => {
  const dispatch = useDispatch();
  const sagaPic = useSelector((store) => store.picture.sagaPic);
  useEffect(() => {
    dispatch({ type: RUN_SAGA, payload: catApi });
  }, []);
  return (
    <div onClick={() => dispatch({ type: RUN_SAGA, payload: catApi })}>
      <h1>Saga Pic</h1>
      <img src={sagaPic} alt="CATs" width="100%" />
    </div>
  );
};

export default SagaPic;
