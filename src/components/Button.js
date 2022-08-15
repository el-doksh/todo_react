import PropTypes from "prop-types";

function Button(props) {
    return (
    <button className={"btn " + props.class} onClick={props.clickAction}>
        {props.text} +
    </button>);
}

Button.defaultProps = {
    'title' : 'Btn',
    'class' : 'btn-primary'
}

Button.propTypes = {
    'title' : PropTypes.string.isRequired,
    'class' : PropTypes.string.isRequired,
    'clickAction' : PropTypes.func.isRequired
}


export default Button;