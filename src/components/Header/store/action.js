export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance
      .get('/topstories/v2/science.json?api-key=5fzWv2e5GUsQ4Y3woW024Nz94CXLtO4D')
      .then(res => {
        const list = res.data.results;
        dispatch(changList(list));
      });
  };
};