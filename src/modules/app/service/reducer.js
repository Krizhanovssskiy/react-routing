export default (state, { type, payload }) => {
  switch (type) {
    case "CASE": {
      return {
        ...state,
        payload,
      };
    }

    default:
      return {
        ...state,
      };
  }
};
