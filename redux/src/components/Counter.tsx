import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const Counter = () => {

    const dispatch = useDispatch();

    const count = useSelector((state) => state.counter.value);
    return (
        <div>
            <h2>Count :{count}</h2>
            <button onClick={() => dispatch({type: "increment"})}>Increment</button>
            <button onClick={() => dispatch({type: "increaseByAmount", payload: 3})}> Increase by amount</button>
        </div>
    )
}

export default Counter
