import Button from "./Button";
import ButtonMultipleStates55 from "./ButtonMultipleStates55";
import ButtonState49 from "./ButtonState49";
import FormSubmission57 from "./FormSubmission57";
import TableItem from "./TableItem";
import React, { useState } from 'react';

const Lists = (props) => {

    const [list, setList] = useState(props.data)
   
    const addItemHandler = (item) => {
        setList((prevList) => {
            return [item, ...prevList]
        })
    }

    return (
        <div className='card mt-5'>
            <div className='card-header d-flex justify-content-between align-items-center'>
                Todos List
            </div>
            <div className='card-body'>
                <FormSubmission57 onAddItem={addItemHandler} />
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
                        {list.map((item) => {
                            return <TableItem key={item.id} id={item.id} price={item.price} name={item.name} desc={item.desc} button={<Button text='Edit' class='btn-primary'/>} />
                        })}
                        <tr>
                            <td>1</td>
                            <td>Sherif</td>
                            <td>50</td>
                            <td>50</td>
                            <td><Button text='Edit' class='btn-primary'/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Hesham</td>
                            <td>60</td>
                            <td>60</td>
                            <td><ButtonMultipleStates55 text='Edit' class='btn-primary'/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Hassan</td>
                            <td>70</td>
                            <td>70</td>
                            <td><ButtonState49 text='Edit' class='btn-primary'/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Lists;