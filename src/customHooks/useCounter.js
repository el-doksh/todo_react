import React, { useState } from "react";

const useCounter = () => {

    const [counter, setCounter] = useState(0);

    const updateCounter = (increment = true) => {
        if(increment) {
            setCounter(prevCounter => prevCounter+1)
        } else {
            setCounter(prevCounter => prevCounter-1)
        }
    }

    return [counter, updateCounter];
}

export default useCounter;