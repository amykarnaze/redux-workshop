import React from 'react';

const ToDo = ({ id, todo, text, completed, isComplete }) => {
  return (
    <li id={id}
      className={completed ? "completed": "not-completed"} onClick={() => isComplete(id)}
    >
    {text}
    {todo}
    </li>
  )
}

export default ToDo;
