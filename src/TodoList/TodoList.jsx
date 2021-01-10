import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todos: PropTypes.array,
  todoClick: PropTypes.func,
};
TodoList.defaultProps = {
  todos: [],
  todoClick: null,
};
function TodoList(props) {
  const { todos, todoClick } = props;

  function handleClick(todo) {
    if (todoClick) {
      todoClick(todo);
    }
  }
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
