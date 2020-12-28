const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  if (action.type === "ADD") {
    return Object.assign({}, state, {
      todos: state.todos.concat(action.payload),
    });
  } else if (action.type === "DELETE") {
    return Object.assign({}, state, {
      todos: state.todos.filter((todo) => todo.id !== action.payload),
    });
  } else {
    return state;
  }
}

export default todoReducer;

// switch (action.type) {
//   case "ADD":
//     return Object.assign({}, state, {
//       todos: state.todos.concat(action.payload),
//     });

//   default:
//     return state;
// }
