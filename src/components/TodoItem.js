import React from 'react';

const TodoItem = ({ task, removeTask, toggleTaskCompletion }) => {
  return (
    <li className="todo-item">
      <span
        className={`task-text ${task.completed ? 'completed' : ''}`}
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.text}
      </span>
      <button className="remove-btn" onClick={() => removeTask(task.id)}>Remove</button>
      <button
        className={`complete-btn ${task.completed ? 'completed-btn' : ''}`}
        onClick={() => toggleTaskCompletion(task.id)}
      >
        {task.completed ? 'Completed' : 'Complete'}
      </button>
    </li>
  );
};

export default TodoItem;
