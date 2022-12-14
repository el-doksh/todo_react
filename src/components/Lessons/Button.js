import PropTypes from "prop-types";

const Button = (props) => {

    var text = props.text;
    const clickHandler = () => {
        text = 'waw';
        console.log(text);
    };

    return (
        <button className={"btn " + props.class} onClick={clickHandler}>
            {text}
        </button>
    );
};

// Default props values
Button.defaultProps = {
    'text' : 'Click me',
    'class' : 'btn-primary'
}

// Default props types validations
Button.propTypes = {
    'text' : PropTypes.string.isRequired,
    'class' : PropTypes.string.isRequired,
    'clickAction' : PropTypes.func
}

export default Button;