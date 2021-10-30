function reducerContext(state, action) {
  let tr;
  switch (action.type) {
    case "DELETE_TRANSACTION":
      tr = state.filter(t => t.id !== action.payload);
      localStorage.setItem("transactions", JSON.stringify(tr));
      return tr;
    case "ADD_TRANSACTION":
      tr = [action.payload, ...state];
      localStorage.setItem("transactions", JSON.stringify(tr));
      return tr;
    default:
      return state;
  }
}

export { reducerContext };
