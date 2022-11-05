import axios from "axios";

export const GET_TODO = "GET_TODO";
export const FETCH_START = "FETCH_START";
export const SUCCESS_GET_TODO = "SUCCESS_GET_TODO";

function fetchStart() {
  return {
    type: FETCH_START,
  };
}

function successGetTodo(data) {
  return {
    type: SUCCESS_GET_TODO,
    payload: data,
  };
}

export const getTodo = () => {
  return async (dispatch) => {
    dispatch(fetchStart());
    const result = await axios(
      "https://6350376e78563c1d82bca248.mockapi.io/todo"
    );
    console.log(result.data);
    dispatch(successGetTodo(result.data));
  };
};
