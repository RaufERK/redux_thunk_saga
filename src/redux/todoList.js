const initState = [{ title: 'Waiting....', id: 342424224 }]

const SET_LIST = 'SET_LIST'
const jsonUrl = 'https://jsonplaceholder.typicode.com/todos';

export function thunkListAction() {
  return async (dispatch) => {
    const fetchRes = await fetch(jsonUrl);
    const finalRes = await fetchRes.json();
    dispatch({
      type: SET_LIST,
      payload: finalRes.slice(-20)
    })
  };
}

export default function reducer(state = initState, { type, payload }) {
  switch (type) {
    case SET_LIST:
      return payload
    default:
      return state
  }
}
