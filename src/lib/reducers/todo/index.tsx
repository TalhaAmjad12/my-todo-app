const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TODO_LIST":
      return state.count;
  }
}

export default counterReducer;
