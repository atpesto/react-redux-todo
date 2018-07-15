import { combineReducers } from 'redux';

const todoReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.length,
          value: action.value,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if(todo.id === action.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
