import React, { useContext, useState } from 'react';
import Modal from 'react-modal';
import { TaskContext } from '../contexts/taskContext';

const customStyles = {
    content : {
      top                   : '25%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')
const TaskForm =()=>{
    var subtitle;
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const openModal= ()=> {
        setIsOpen(true);
    }
     
    const afterOpenModal=()=> {
        subtitle.style.color = '#f00';
      }
     
    const closeModal=()=>{
        setIsOpen(false);
    }

    const {dispatch}=useContext(TaskContext);
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const submitEvent =(e)=>{
        e.preventDefault();
        dispatch({type:'ADD_TASK',task:{
            title,desc
        }});
        // console.log(title,desc);
        setTitle('');
        setDesc('');

    }
    return(
        <div>
            <button onClick={openModal} className="openModalForm"><i className="fa fa-plus-circle" aria-hidden="true"> Add New Task</i></button>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <div className="task-form">
                <button onClick={closeModal} className="formCloseModel">x</button>
                    <h1 ref={_subtitle => (subtitle = _subtitle)}>Add New Task</h1>
                    <form onSubmit={submitEvent}>
                        <input type="text" placeholder="Task Title" name="title"  value={title} onChange={e=>setTitle(e.target.value)} required /><br/>
                        <textarea rows="3" cols="50" placeholder="Task Description" onChange={e=>setDesc(e.target.value)} name="desc"  value={desc} required >

                        </textarea>
                        {/* <input type="text"    required /> */}
                        <button className="task-submitBtn">Add</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
export default TaskForm;