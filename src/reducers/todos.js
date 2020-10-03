export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Date.now(),
        todo: action.todo,
        completed: false
      }];
    case 'IS_COMPLETE':
      return state.map(todo => {
        if (todo.id === action.id) {
          return { id: todo.id, todo: todo.text, completed: !todo.completed }
        }
        return todo;
      });
    default:
      return state;
  }
}