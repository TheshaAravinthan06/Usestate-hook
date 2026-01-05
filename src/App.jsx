import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-80">
        <h1 className="text-2xl font-bold mb-4">Simple Counter App</h1>

        <p className="text-lg mb-6">
          Current Count: <span className="font-semibold">{count}</span>
        </p>

        <div className="flex justify-between mb-4">
          <button
            onClick={increment}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Increment
          </button>

          <button
            onClick={decrement}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Decrement
          </button>
        </div>

        <button
          onClick={reset}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
