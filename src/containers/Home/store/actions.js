import axios from "axios";
import { CHANGE_LIST } from "./constants";
import clientAxios from '../../../client/request'
import serverAxios from '../../../server/request'

const changList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = (server) => {
  const request = server ? serverAxios : clientAxios
  return dispatch => {
    return request
      .get('/topstories/v2/science.json?api-key=5fzWv2e5GUsQ4Y3woW024Nz94CXLtO4D')
      .then(res => {
        const list = res.data.results;
        dispatch(changList(list));
      });
  };
};
