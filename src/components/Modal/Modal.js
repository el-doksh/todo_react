import React from "react";

import { ReactDOM } from "react";

const BackDrop = () => {
    return <div className="backdrop"></div>;
}

const overLay = () => {
    return (
        <div className="modal">
            <div className=""></div>

        </div>
    );
}

const Modal = () => {
    return (
        <>
        {/* dataToggle="modal" dataTarget="#exampleModal"*/}
        {/* {ReactDOM.createPortal(<BackDrop />, document.getElementById('modals'))} */}
            <button type="button" className="btn btn-primary"  >
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Hello this is modal body
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;