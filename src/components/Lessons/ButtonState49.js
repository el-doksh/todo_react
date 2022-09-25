import PropTypes from "prop-types";
import { useState } from "react";

const ButtonState49 = (props) => {

    const [text, setText] = useState(props.text);
    
    const clickHandler = () => {
        setText('Update title');
    };

    return (
        <button className={"btn " + props.class} onClick={clickHandler}>
            {text}
        </button>
    );
};

// Default props values
ButtonState49.defaultProps = {
    'text' : 'Click me',
    'class' : 'btn-primary'
}

// Default props types validations
ButtonState49.propTypes = {
    'text' : PropTypes.string.isRequired,
    'class' : PropTypes.string.isRequired,
    'clickAction' : PropTypes.func
}

export default ButtonState49;