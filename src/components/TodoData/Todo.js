import PropTypes from "prop-types";

function Todo(props) {

    return (
        <tr>
            <td>
                {props.id}
            </td>
            <td>
                {props.title}
            </td>
            <td>
                <button className='btn btn-danger' onClick={props.deleteAction}>Delete</button>
            </td>
        </tr>
    );
}

Todo.propTypes = {
    'id' : PropTypes.number,
    'title' : PropTypes.string.isRequired,
    'deleteAction' : PropTypes.func.isRequired
}

export default Todo;