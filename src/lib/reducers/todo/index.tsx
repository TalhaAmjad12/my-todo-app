const DUMMY_DATA = [
  {
    id: 1,
    title: "react js",
    completed: "in-progress",
  },
  {
    id: 2,
    title: "Next js",
    completed: "in-progress",
  },
  {
    id: 3,
    title: "Redux js",
    completed: "in-progress",
  },
];

const initialState = {
  data: DUMMY_DATA,
  isloading: false,
  error: { messgae: "error message", isError: true },
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_TODO_LIST":
      return state;
    default:
      return state;
  }
}

export default counterReducer;
