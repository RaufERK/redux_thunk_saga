import { call, put, takeEvery } from 'redux-saga/effects'
import { SET_SAGA_PIC, RUN_SAGA } from './picture'

const catFetch = async (payload) => {
  const fetchRes = await fetch(payload)
  const resRes = await fetchRes.json()
  return resRes[0].url
}

// worker Saga
function* fetchCat(action) {
  const image = yield call(catFetch, action.payload);
  yield put({ type: SET_SAGA_PIC, payload: image });
}

//watcher
function* mySaga() {
  yield takeEvery(RUN_SAGA, fetchCat);
}

export default mySaga;
