// export function someAction(/* context */) {
// }
import axios from 'axios';

export const SET_USER_NAME_STATE = ({ commit }, username) => {
  commit('SET_USER_NAME', username);
};
export const GET_GAME_DATA_API = ({ commit }) => {
  const allRequest = async () => {
    const allData = [];
    await axios.get('http://jservice.io/api/clues?category=1')
      .then((res) => {
        allData.push(res.data.slice(0, 5));
      });
    await axios.get('http://jservice.io/api/clues?category=2')
      .then((res) => {
        allData.push(res.data.slice(0, 5));
      });
    await axios.get('http://jservice.io/api/clues?category=3')
      .then((res) => {
        allData.push(res.data.slice(0, 5));
      });
    await axios.get('http://jservice.io/api/clues?category=4')
      .then((res) => {
        allData.push(res.data.slice(0, 5));
      });
    await axios.get('http://jservice.io/api/clues?category=5')
      .then((res) => {
        allData.push(res.data.slice(0, 5));
      });
    return allData;
  };
  allRequest().then((data) => {
    commit('SET_GAME_DATA', data);
  });
};
