import React from 'react';
import { useContext } from 'react';
import { TaskContext } from '../contexts/taskContext';

const TaskDetails=({task})=>{
    const {dispatch}=useContext(TaskContext);
    // onClick={dispatch({type:'DELETE_TASK',id:task.id})}
    return(
        <li onClick={()=>dispatch({type:'DELETE_TASK',id:task.id})} >
            <div className="title">{task.title}</div>
            <div className="desc">{task.desc}</div>
            <div className="desc">{task.now}</div>
        </li>
    );
}
export default TaskDetails;