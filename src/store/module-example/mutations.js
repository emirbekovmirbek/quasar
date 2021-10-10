// export function someMutation(/* state */) {
// }
export const SET_USER_NAME = (state, username) => {
  state.user.name = username;
};
export const SET_GAME_DATA = (state, gameData) => {
  state.gameData = gameData;
};
