import Button from "./Button";
import ButtonMultipleStates55 from "./ButtonMultipleStates55";
import ButtonState49 from "./ButtonState49";
import TableItem from "./TableItem";
import React, { useState } from 'react';
import ReactDOM  from "react-dom";
import Create from "./Create";
import FormSubmission57 from "./FormSubmission57";
import FormSubmission from "./FormSubmission";
import IsLoggedIn from "./context/IsLoggedIn";
import { NavLink } from "react-router-dom";
import Show from "./products/Show";

const List267 = (props) => {

    let data = <tr colSpan="5"><td >No data found</td> </tr>
    if (props.data.length > 0) {
        data =  props.data.map((item) => {
            return <TableItem 
                key={item.id} 
                id={item.id} 
                price={item.price} name={item.name} desc={item.desc} 
                button={<NavLink to="/product/${item.id}" className="btn btn-info" >Edit</NavLink>} 
            />
        })
    }
    
    return (
        <>
            <div className="col-md-12">
            <FormSubmission />
            </div>
            <div className='card mt-5'>
                <div className='card-header d-flex justify-content-between align-items-center'>
                    Products List
                </div>
                <div className='card-body'>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Desc</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data}
                        </tbody>
                    </table>
                </div>
                {ReactDOM.createPortal(<Create />, document.getElementById('modals'))}
                
            </div>
        </>
    );
};


export default List267;