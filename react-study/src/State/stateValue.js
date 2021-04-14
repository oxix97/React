import React, {useState} from "react";

const StateValue = () => {

    const [value, setValue] = useState(0);


    return (
        <div>
            <div>
                <p>Counter : {value}</p>
            </div>
            <div>
                <button onClick={() => setValue(value + 1)}>+1</button>
                <button onClick={() => setValue(value - 1)}>-1</button>
            </div>
        </div>
    )
}
export default StateValue;