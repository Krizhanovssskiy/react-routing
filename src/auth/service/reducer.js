import { USER_DONE } from "./constants";
const initialAuth = {
  user: {},
};

const authReducer = (state = initialAuth, { type, payload }) => {
  console.log(payload, state, "payload");
  switch (type) {
    case USER_DONE: {
      return {
        user: payload,
      };
    }
    default: {
      return {
        state,
      };
    }
  }
};

export default authReducer;
