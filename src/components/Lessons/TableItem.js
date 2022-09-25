import Button from "./Button";

const TableItem = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.desc}</td>
            <td>{props.button}</td>
        </tr>
    );
}

export default TableItem;