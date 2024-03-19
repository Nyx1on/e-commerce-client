import USER_ACTION_TYPES from "../../action/user/user.types";

const initialState = {
  user: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_ACTION_TYPES.LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case USER_ACTION_TYPES.LOGIN_FAILED:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default authReducer;
