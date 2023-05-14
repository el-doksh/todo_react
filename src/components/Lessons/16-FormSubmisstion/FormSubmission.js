import React from "react";
import ExampleUseState from "./ExampleUseState";
import ExampleUseRef from "./ExampleUseRef";

const FormSubmission = () => {
    return (
        <>
            form submission has two ways
            <br />
            <br />

            1- submit a form using useState()

            preffered if you want to do some thing in values
            <div className="container">

                <ExampleUseState />
            </div>
            <br />

            2- submit a form using useRef()

            preffered if you wouldn't do anything in the values
            <div className="container">

                <ExampleUseRef />
            </div>
            <br />
            <br />
            <br />

        </>
    );
}

export default FormSubmission;