import Todo from "./Todo";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function List(props) {

    const [Data, setData] = useState(null);

    useEffect( () => {
       setData(getTodos())
    }, []);

    function getTodos() {
        fetch('http://localhost:5000/tasks')
        .then((response) => {
            return response.json()
        })
        .then (data => {
            console.log(data);
            setData(data);
        })
    }

    function DeleteTodo(id) {
        console.log('clicked' + id);
        fetch(`http://localhost:5000/tasks/${id}` , {
            "method" : 'DELETE'
            }).then ((res) => {
                getTodos()
            })
            
    }
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { Data && Data.map((todo) => (
                    <Todo  key={todo.id} id={todo.id} title={todo.title} deleteAction={ () => DeleteTodo(todo.id) } editAction= {() => props.EditTodo(todo.id)} /> 
                )) }
            </tbody>
        </table>
    );
}
export default List;