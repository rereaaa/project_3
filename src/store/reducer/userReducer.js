import { USER_ADMIN } from "../action/userAction";

const nilaiDefault = {
  user: "superadmin",
};

const userReducer = (state = nilaiDefault, action) => {
  switch (action.type) {
    case USER_ADMIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
