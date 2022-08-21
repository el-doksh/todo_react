import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
                <Link to={props.id}>
                    Edit
                    {/* <button className='btn btn-info ml-3'>Edit</button> */}
                </Link>
                <button className='btn btn-danger mr-3' onClick={props.deleteAction}>Delete</button>
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