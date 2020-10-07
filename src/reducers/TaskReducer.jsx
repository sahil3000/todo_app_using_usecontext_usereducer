import {v4 as uuid} from 'uuid';
export const taskReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TASK':
            let now= new Date();
            now =now.toString()
            console.log(now);
            // let date = now.toLocaleDateString('dd-mm-yyyy');
            // let time = now.toLocaleTimeString();
            // console.log(date,time);
            return [...state,{title:action.task.title ,desc:action.task.desc,id:uuid(),now:now}];
        case 'DELETE_TASK':
            return state.filter(task=>task.id!==action.id)
        default:
            return state;
    }
}