import { SET_LANG } from "../action/langAction";

const nilaiDefault = {
  lang: "en",
};

const langReducer = (state = nilaiDefault, action) => {
  switch (action.type) {
    case SET_LANG:
      return {
        ...state,
        lang: action.payLoad,
      };
    default:
      return state;
  }
};

export default langReducer;
