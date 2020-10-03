export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const isComplete = id => ({
  type: 'IS_COMPLETE',
  id
})