import React, { useEffect, useRef, useState } from "react";

const ExampleUseRef = () => {

    const nameRef = useRef();
    const ageRef = useRef();
    const [error, setError] = useState(null);
    const [ageError, setAgeError] = useState(null);
    const [formIsValid, setFormIsValid] = useState(false); 

    useEffect(() => {
        if(nameRef.current.value && ageRef.current.value ) {
            setFormIsValid(true);
        }
    }, [nameRef, ageRef]);


    const formSubmitHandler = e => {
        console.log(e);
        e.preventDefault();
        if(nameRef.current.value.trim() === ''){
            setError('name is required')
        } else {
            setError(null)
        }
        console.log({
            'name' : nameRef.current.value,
            'age' : ageRef.current.value
        });

        nameRef.current.value = ''; //not ideal, don't manipulate the DOM
    }

    const handleInputisValid = () => {
        if(nameRef.current.value.trim() === ''){
            setError('name is required')
        } else {
            setError(null)
        }
    }

    const ageBlueHandler = () => {
        if(ageRef.current.value.trim() === ''){
            setAgeError('age is required')
        } else {
            setAgeError(null)
        }
        
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-group" >
                <label className="form-label">Name</label>
                <input 
                    name="Name" 
                    ref={nameRef} 
                    onBlur={handleInputisValid}
                    className={`form-control ${error ? ' is-invalid' : ''}`} 
                />
                {error && <span className="badge text-danger">Name is required</span>}
            </div>
            <div className="form-group" >
                <label className="form-label">Age</label>
                <input 
                    name="Age" 
                    ref={ageRef} 
                    onBlur={ageBlueHandler}
                    className={`form-control ${ageError ? ' is-invalid' : ''}`} 
                />
                {ageError && <span className="badge text-danger">Age is required</span>}
            </div>
            <div className="form-group mt-3">
                <button type="submit" disabled={!formIsValid} className="btn btn-success">Save</button>
            </div>
        </form>
    );
}

export default ExampleUseRef;