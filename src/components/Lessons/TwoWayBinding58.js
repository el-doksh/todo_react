import PropTypes from "prop-types";
import { useState } from "react";

const TwoWayBinding58 = () => {

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }
    const priceHandler = (event) => {
        setPrice(event.target.value)
    }
    const dateHandler = (event) => {
        setDate(event.target.value)
    }

    //normal approach
    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            title,
            price,
            date
        }
        console.log(data);
        setTitle('');
        setPrice('');
        setDate('');
        console.log('data', title);
    };
    
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label>Title</label>
                <input type='text' value={title} onChange={titleHandler}/>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type='number'value={price}  onChange={priceHandler}/>
            </div>
            <div className="form-group">
                <label>Date</label>
                <input type='text' value={date}  onChange={dateHandler}/>
            </div>
            <button type="submit">save</button>
        </form>
    );
};

export default TwoWayBinding58;