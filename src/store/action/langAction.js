export const SET_LANG = "SET_LANG";

export const setLang = (lang) => {
  return {
    type: SET_LANG,
    payload: lang,
  };
};
