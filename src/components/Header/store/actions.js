export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance
      .get('/api/isLogin.json?secret=PP87ANTIPIRATE')
      .then(res => {
        console.log(res)
        // const list = res.data.results;
        // dispatch(changList(list));
      });
  };
};