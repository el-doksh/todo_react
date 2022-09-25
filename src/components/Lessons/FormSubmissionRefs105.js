import PropTypes from "prop-types";
import { useRef, useState } from "react";

const FormSubmissionRefs105 = (props) => {

    const name = useRef();
    const price = useRef();
    const desc = useRef();
    //normal approach
    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            id : Math.floor(Math.random() * 100),
            name : name.current.value,
            price : price.current.value,
            desc : desc.current.value
        }
        console.log(data);
        name.current.value = ''
        price.current.value = ''
        desc.current.value = ''
        props.onAddItem(data)
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="card mt-5">
                <div className="card-header">
                    Create Product Refs
                </div>
                <div className="card-body">
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Name</label>
                        <input type='text' className="form-control" required ref={name}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Price</label>
                        <input type='number' className="form-control" required ref={price}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Description</label>
                        <input type='text'className="form-control" required  ref={desc}/>
                    </div>
                </div>
                <div className="col-md-12 mt-4 mb-3">
                    <button type="submit" className="btn btn-success">Save</button>
                </div>
            </div>
                </div>
            </div>
        </form>
    );
};

export default FormSubmissionRefs105;