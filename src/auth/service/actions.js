import { users } from "../../helpers/helpers-test";

import { USER_DONE } from "./constants";

export const singIn = ({ username, password }) => {
  // setTimeout(() => {
  const user = users.find(
    (item) =>
      item.userName.toLowerCase() === username.toLowerCase().trim() &&
      item.password === password.trim()
  );

  if (user) {
    return {
      type: USER_DONE,
      payload: user,
    };
  }
  // }, 0);
};
