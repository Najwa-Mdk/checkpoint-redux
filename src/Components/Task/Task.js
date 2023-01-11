import React from 'react';
import {useDispatch} from "react-redux";
import { deleteTask , doneTask } from '../../Redux/Actions/listTask';
import './Task.css';
import Edit from '../Edit/Edit';

const Task = ({task}) => {
  const dispatch = useDispatch ();
  return (
    <div className='btns'>
        <span className= {task.isDone ? "Done" : null}>{task.text}</span>
        <Edit className ='edit' task ={task}/>
        <button className ='Delete' onClick ={()=> dispatch(deleteTask(task.id))}>Delete</button>
        <button className ='donebtn' onClick ={() => dispatch(doneTask(task.id))}>{task.isDone ? "Undone" : "Done"}</button>
    </div>
  )
}

export default Task