import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { increment, decrement, incrementByAmount } from "./conterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div className="App">
      Hej
      <h1>{count + 1}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmount(amount));
        }}
      >
        amount is {amount}
      </button>
    </div>
  );
}
export default App;
