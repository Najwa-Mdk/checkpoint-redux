import React, {useState} from 'react'
import {Form, Button} from "react-bootstrap";
import { useDispatch } from 'react-redux';
import {addTask} from "../../Redux/Actions/listTask";
import './AddTask.css'

const AddTask = () => {
    const [text, setText] =useState ("");
    const dispatch = useDispatch ();

    const handleChange = (e) => {
        e.preventDefault();
        if (text) {
            dispatch(addTask({id:Math.random(), text , isDone: false}));
            setText ("");
        } else {
            alert ("can not add an empty text !");
        }
    };
  return (
    <div>
         <Form onSubmit={handleChange}>
          <div className='add'>
        <Form.Control className = 'input' type='text' placeholder='Enter task...' onChange = {(e)=> setText(e.target.value)} value = {text}/>
      <Button variant='primary' type='submit' onClick = {handleChange}>
        Add
      </Button>
      </div>
    </Form>
    </div>
  );
};

export default AddTask