const GET_MESSAGE_API = 'messageReducer/GET_MESSAGE_API';

const initialState = [];

// const getMessage = (payload) => ();

export const getMessageAPI = () => async (dispatch) => {
  const res = await fetch('http://localhost:3000/greetings/show', {
    mode: 'no-cors',
  });
  const data = await res.json();
  dispatch({
    type: GET_MESSAGE_API,
    data,
  });
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE_API:
      return action.payload;
    default:
      return state;
  }
};

export default messageReducer;
// export { getMessageAPI };
