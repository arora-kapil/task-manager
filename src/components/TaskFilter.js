import React from 'react';

const TaskFilter = ({ setFilter }) => {
    return (
        <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('incomplete')}>Incomplete</button>
        </div>
    );
};

export default TaskFilter;
