import {
  post_request,
  post_success,
  post_error,
  get_request,
  get_success,
  get_error,
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
      return { ...state, loading: false, error: false, data: payload };
    case get_error:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};
export { reducer };
