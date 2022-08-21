
import Button from "./Button";
import Edit from "./TodoData/Edit";
import Create from "./TodoData/Create";
import List from "./TodoData/List";
import { useState, useEffect } from "react";

function Todos() {

    const [CreateTask, setCreateTask] = useState(false);
    const [EditTask, setEditTask] = useState(false);
    const [ShowList, setShowList] = useState(true);

    function create() {
        setShowList(false);
        setEditTask(false);
        setCreateTask(true);
    }

    var TaskEdit = null;
    
    function EditTodo(id) {
        console.log(`click edit ${id}`);
        fetch(`http://localhost:5000/tasks/${id}`).then ((res) => {
                return res.json()
            }).then((data) => {
                setShowList(false);
                setEditTask(true);
                setCreateTask(false);
                return data;
            })
    }

    function SaveNewTask(task) {
        console.log(task);
        fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(task)
        })
        .then((response) => {
            return response.json()
        })
        .then ((data) => {
            setCreateTask(false);
            setShowList(true)
        })
    }
    function updateTask(task) {
        console.log(`update task: ${task}`);
    }

    return (
        <div className='card mt-5'>
            <div className='card-header d-flex justify-content-between align-items-center'>
                Todos List
                <Button class='btn-success' text='Create TODO' clickAction={create} />
            </div>
            <div className='card-body'>
                {CreateTask && <Create submit={SaveNewTask} />}
                {EditTask && <Edit submit={updateTask} task={EditTodo} />}
                {ShowList && <List EditTodo={EditTodo} />}
            </div>
        </div>
    );
}

export default Todos;