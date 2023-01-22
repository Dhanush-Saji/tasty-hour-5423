import {
  get_request,
  get_success,
  get_error,
  post_request,
  post_success,
  post_error,
} from "./actionTypes";
const initial_state = {
  loading: false,
  error: false,
  data: [],
};
const reducer = (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case get_request:
      return { ...state, loading: true, error: false };
    case get_success:
      return {
        ...state,
        data: payload,
       loading: false,
        error: false,
      };
    case get_error:
      return { ...state, ...state.getdata, loading: false, error: true };

    /* ALL POST REQUEST */
    case post_request:
      return { ...state, ...state.postdata1, loading: true, error: false };
    case post_success:
      return {
        ...state, // this spread for object(initialState);
        newpostdata: [...state.postdata1, payload],
      };
    case post_error:
      return { ...state, ...state.postdata1, loading: false, error: true };
    default:
      return state;
  }
};
export { reducer };
