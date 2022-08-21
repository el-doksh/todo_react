const Button = (props) => {

    const clickHandler = () => {
        console.log('clickeed');
    };
    return (
        <button className={"btn " + props.class} onClick={clickHandler}>
            {props.text}
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
    'title' : PropTypes.string.isRequired,
    'class' : PropTypes.string.isRequired,
    'clickAction' : PropTypes.func
}


export default Button;