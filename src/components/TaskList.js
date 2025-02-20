import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleTaskCompletion }) => {
    return (
        <ul>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    toggleTaskCompletion={toggleTaskCompletion}
                />
            ))}
        </ul>
    );
};

export default TaskList;
