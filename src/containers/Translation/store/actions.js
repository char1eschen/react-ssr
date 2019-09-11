import { CHANGE_LIST } from "./constants";

const changList = list => ({
  type: CHANGE_LIST,
  list
});

export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance
      .get("/api/translations.json")
      .then(res => {
        if (res.data.success) {
          const list = res.data.data;
          dispatch(changList(list));
        } else {
          const list = [];
          dispatch(changList(list));
        }
      });
  };
};
