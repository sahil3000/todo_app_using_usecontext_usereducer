import React from 'react';
import { useContext } from 'react';
import { TaskContext } from '../contexts/taskContext';
import TaskDetails from './TaskDetails';

const TaskList1=()=>{
    const {tasks}=useContext(TaskContext);
    return(
        tasks.length?
        <div className='task-list'>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task)=>{
                    return <TaskDetails task={task} key={task.id} />
                })}
            </ul>
        </div>
        :
        <div className='empty'>No Task. Hello free time</div>
    );
}
export default TaskList1;