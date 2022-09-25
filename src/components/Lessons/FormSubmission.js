import { useContext, useState } from "react";
import ProductsContext from "./context/ProductsContext";

const FormSubmission = (props) => {

    const dida = useContext(ProductsContext);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [desc, setDesc] = useState('');

    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const priceHandler = (event) => {
        setPrice(event.target.value)
    }
    const descHandler = (event) => {
        setDesc(event.target.value)
    }
    //normal approach
    const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            id : Math.floor(Math.random() * 100),
            name,
            price,
            desc
        }
        // dida.store.addProduct(data);
        console.log(data);
        setName('');
        setPrice('');
        setDesc('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="card mt-5">
                <div className="card-header">
                    Create Product
                </div>
                <div className="card-body">
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Name</label>
                        <input type='text' className="form-control" required onChange={nameHandler} value={name}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Price</label>
                        <input type='number' className="form-control" required onChange={priceHandler} value={price}/>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Description</label>
                        <input type='text'className="form-control" required  onChange={descHandler} value={desc}/>
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

export default FormSubmission;