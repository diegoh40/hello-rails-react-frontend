const GET_MESSAGE_API = 'GET_MESSAGE_API';

const initialState = [];

export const getMessageAPI = () => async (dispatch) => {
  const res = await fetch('http://localhost:3000/greetings/show');
  const data = await res.json();
  dispatch({
    type: GET_MESSAGE_API,
    data,
  });
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE_API:
      return action.data;
    default:
      return state;
  }
};

export default messageReducer;
