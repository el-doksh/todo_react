import PropTypes from "prop-types";
import { useState } from "react";

const ButtonMultipleStates55 = (props) => {

    const [userInput, setUserInput] = useState({
        text: '',
        date: '2010',
        price: '10'
    })
    // or
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');

    //normal approach
    const clickHandler = (event) => {
        setText('dida') //event.target.value
        setDate('2020')
        setPrice('150')
    };
    

    const clickHandler1 = () => {
        setUserInput({
            text: 'test',
            date: '2002',
            price: '50'
        });
    };
    //or better
    const clickHandler2 = () => {
        setUserInput({
            ...setUserInput,
            text: 'testewr',
        });
    };
    //or best 
    const clickHandler3 = (event) => {
        setUserInput((prevStates) => {
            return {
                ...prevStates,
                text: 'teseeeet' //event.target.value
            }
        });
    };

    return (
        <button className={"btn " + props.class} onClick={clickHandler3}>
            {userInput.text},
            {userInput.price} ,
            {userInput.date}
        </button>
    );
};

// Default props values
ButtonMultipleStates55.defaultProps = {
    'text' : 'Click me',
    'class' : 'btn-primary'
}

// Default props types validations
ButtonMultipleStates55.propTypes = {
    'text' : PropTypes.string.isRequired,
    'class' : PropTypes.string.isRequired,
    'clickAction' : PropTypes.func
}

export default ButtonMultipleStates55;