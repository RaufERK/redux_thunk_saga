const initState = {
  thunkPic: null,
  sagaPic: null,
}
const SET_THUNK_PIC = 'SET_THUNK_PIC'
export const SET_SAGA_PIC = 'SET_SAGA_PIC'
export const RUN_SAGA = 'RUN_SAGA'
const foxPicApiUrl = 'https://randomfox.ca/floof/?ref=apilist.fun';

export const getFoxPicAction = () => {
  return async (dispatch, getState) => {
    console.log('getState=====>', getState());
    const fetchRes = await fetch(foxPicApiUrl);
    const { image } = await fetchRes.json();
    dispatch({
      type: SET_THUNK_PIC,
      payload: image
    });
  };
}

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_THUNK_PIC:
      return { ...state, thunkPic: payload }
    case SET_SAGA_PIC:
      return { ...state, sagaPic: payload }
    default:
      return state
  }
}
