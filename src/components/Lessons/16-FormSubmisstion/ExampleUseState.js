import React, { useState } from "react";

const ExampleUseState = () => {

    const [nameValue, setNameValue] = useState('');

    const formSubmitHandler = e => {
        e.preventDefault();
        console.log({
            'name' : nameValue
        }
        );
        setNameValue('')
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Name</label>
                <input name="dot" onChange={e => setNameValue(e.target.value)} value={nameValue} />
            </div>
            <div className="form-control">
                <button type="submit">Save</button>
            </div>
        </form>
    );
}

export default ExampleUseState;