import React, { useContext } from 'react';
import { TaskContext } from '../contexts/taskContext';

export const Navbar=()=>{
    const {tasks}=useContext(TaskContext);
    
    return(
        <div className="navbar">
            <h1> <i className="fa fa-tasks" aria-hidden="true"> Task Manage</i></h1>
            <p>Currently you have {tasks.length} tasks to do...</p>
        </div>
    );
}