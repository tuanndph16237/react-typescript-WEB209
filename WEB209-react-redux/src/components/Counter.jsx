import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseByAmount, increment } from "../slice/counter";

const Counter = () => {
  // Khởi tạo 1 biến dispatch
  // Để gửi 1 object action vào reducer
  const dispatch = useDispatch();
  // useSelector: Truy cập vào store và get được state
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(increaseByAmount(13))}>
        Increase by amount
      </button>
    </div>
  );
};
export default Counter;