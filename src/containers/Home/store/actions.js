import { CHANGE_LIST } from "./constants";

const changList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance
      .get('/topstories/v2/science.json?api-key=5fzWv2e5GUsQ4Y3woW024Nz94CXLtO4D')
      .then(res => {
        const list = res.data.results;
        dispatch(changList(list));
      });
  };
};
