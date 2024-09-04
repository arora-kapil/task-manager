import React from 'react';

const TaskItem = ({ task, toggleTaskCompletion }) => {
    return (
        <li
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            onClick={() => toggleTaskCompletion(task.id)}
        >
            {task.text}
        </li>
    );
};

export default TaskItem;
