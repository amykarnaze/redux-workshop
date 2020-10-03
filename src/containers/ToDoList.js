import React from 'react';
import Todo from '../components/ToDo';
import { connect } from 'react-redux';
import { isComplete } from '../actions';


const ToDoList = ({ todos, isComplete }) => {
  const displayTodos = todos.map(todo => {
    return (
      <Todo
        {...todo}
        key={todo.id}
        id={todo.id}
        isComplete={isComplete}
      />
    )
  })

  return (
    <ul>
      {displayTodos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps, {isComplete})(ToDoList);