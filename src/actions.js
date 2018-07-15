export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    value: text
  }
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};
