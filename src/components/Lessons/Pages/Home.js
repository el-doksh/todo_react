import React from "react";
import useCounter from "../../../customHooks/useCounter";


const Home = () => {
    const [counter, setCounter] = useCounter();

    return (
        <div>
            <h2 className="text-center"> home page</h2>
            <hr />
            <h3>Custom Hooks example:</h3>
            <br />
            <button type="button"  onClick={() => setCounter()}>+</button>
            <input type="number" value={counter} onChange={() => {}} />
            <button type="button"  onClick={() => setCounter(false)}>-</button>
            <hr />

        </div>
    );
}

export default Home;