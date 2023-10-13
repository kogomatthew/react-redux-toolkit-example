import { useState } from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./store/counter";

function App() {
  const { count} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
 
  return (
    <>
      <div className="card">
        <p>Count is {count}</p>
        <button onClick={() => dispatch(increment() )}>
         
          Increment 
        </button>
        <button onClick={() => dispatch(decrement())  }> 
          Decrement 
        </button>

        <button onClick={() => dispatch(incrementByAmount(10))  }> 
          Increment by 10 
        </button>
      </div>
    </>
  );
}

export default App;
