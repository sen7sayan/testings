
import React, { useState } from "react";

const Sum = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculateSum = () => {
    if (num1.trim() === "" || num2.trim() === "") {
      setResult("Please enter both numbers");
      return;
    }

    setResult(Number(num1) + Number(num2));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-2 text-2xl font-bold text-center">
          Addition Calculator
        </h1>

        <div className="mb-4">
          <label className="mb-1 block">First Number</label>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full rounded border p-2"
            placeholder="Enter first number"
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block">Second Number</label>
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full rounded border p-2"
            placeholder="Enter second number"
          />
        </div>

        <button
          onClick={calculateSum}
          className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
        >
          Calculate Sum
        </button>

        {result !== null && (
          <p className="mt-4 text-center text-lg font-semibold">
            Result: {result}
          </p>
        )}
      </div>
    </div>
  );
};

export default Sum;
