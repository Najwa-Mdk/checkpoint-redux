import React from 'react'
import {useSelector} from "react-redux";
import Task from "../Task/Task";
import './ListTask.css'
import {useState} from 'react'

const ListTask = () => {
    const [status, setStatus] = useState("All")
    const list = useSelector((state) => state.ListReducer.ListTasks)
    return (
        <div>
            <button className='all'
                onClick={
                    () => setStatus("All")
            }>All</button>
            <button className='done'
                onClick={
                    () => setStatus("Done")
            }>Done</button>
            <button className='undone'
                onClick={
                    () => setStatus("Undone")
            }>Undone</button>
            <h2>List Tasks</h2>
            {
            status === "Done" ? list.filter((el) => el.isDone === true).map((el) => <Task task={el}
                key={
                    el.id
                }/>) : status === "Undone" ? list.filter((el) => el.isDone === false).map((el) => <Task task={el}
                key={
                    el.id
                }/>) : list.map((el) => <Task task={el}
                key={
                    el.id
                }/>)
        } </div>
    )
}

export default ListTask
