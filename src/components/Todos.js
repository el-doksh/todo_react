
import Button from "./Button";
import Create from "./TodoData/Create";
import List from "./TodoData/List";
import { useState, useEffect } from "react";

function Todos() {

    const [CreateTask, setCreateTask] = useState(false);
    const [ShowList, setShowList] = useState(true);

    function create() {
        setShowList(false);
        setCreateTask(true);
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
        .then (data => {
            setCreateTask(false);
            setShowList(true)
        })
    }

    return (
        <div className='card mt-5'>
            <div className='card-header d-flex justify-content-between align-items-center'>
                Todos List
                <Button class='btn-success' text='Create TODO' clickAction={create} />
            </div>
            <div className='card-body'>
                {CreateTask && <Create submit={SaveNewTask} />}
                {ShowList && <List />}
            </div>
        </div>
    );
}

export default Todos;