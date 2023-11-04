"use client";
import React, { useState } from "react";
import { AiOutlineHistory } from "react-icons/ai";

export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const [onhistory, setonhistory] = useState(false);

  const handleButtonPress = (button) => {
    if (button === "=") {
      calculateResult();
    } else if (button === "AC") {
      setDisplay("");
      setResult("");
    } else {
      setDisplay(display + button);
    }
  };

  const calculateResult = () => {
    try {
      const res = eval(display);
      const roundedResult = Number(res).toFixed(4); // Limit result to 4 decimal places
      setResult(roundedResult);
      setHistory([...history, `${display} = ${roundedResult}`]);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex justify-center w-full items-center sm:m-8 ">
      <div className="bg-white w-[100vw] sm:w-[300px] h-[35rem] rounded-3xl">
        <div className="p-4 flex items-center justify-center">
          <button
            type="button"
            className="rounded-full bg-gray-300 p-2"
            onClick={() => {
              setonhistory(!onhistory);
            }}
          >
            <AiOutlineHistory />
          </button>
        </div>
        <div className={`${onhistory ? "block" : "hidden"}`}>
          {history.map((item, index) => (
            <div key={index}>
              <p className="text-black text-3xl font-bold mt-4">{item}</p>
            </div>
          ))}
        </div>
        <div className={`${onhistory ? "hidden" : "block"}`}>
          <div className="pt-[8rem] text-black text-right px-6 font-bold">
            {display || "0"}
          </div>
          <div className="flex px-6 justify-between">
            <div className="text-4xl  text-black">=</div>
            <div className="text-4xl text-black font-extrabold">
              {result || "0"}
            </div>
          </div>

          <div className="bg-[#9ecdf9] h-[60%] rounded-3xl">
            <div className="max-w-xs mx-auto flex justify-between">
              <div className="flex flex-col  p-[10px] rounded-lg">
                <div className="flex justify-center space-x-6  w-[14rem]  rounded-3xl bg-[#d7e8f8]">
                  <button
                    className="hover:bg-blue-400 text-black font-bold rounded-full h-12 w-12 focus:outline-none focus:shadow-outline"
                    onClick={() => handleButtonPress("AC")}
                  >
                    AC
                  </button>
                  <button
                    className="hover:bg-blue-400 text-black font-bold rounded-full h-12 w-12 focus:outline-none focus:shadow-outline"
                    onClick={() => handleButtonPress("=")}
                  >
                    =/-
                  </button>
                  <button
                    className="hover:bg-blue-400 text-black font-bold rounded-full h-12 w-12 focus:outline-none focus:shadow-outline"
                    onClick={() => handleButtonPress("%")}
                  >
                    %
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "00"].map((button) => (
                    <button
                      key={button}
                      className="bg-[#d7e8f8] hover:bg-blue-700 text-black font-bold rounded-full h-12 w-12 focus:outline-none focus:shadow-outline"
                      onClick={() => handleButtonPress(button)}
                    >
                      {button}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-[#d7e8f8]  rounded-3xl my-4">
                <div className="flex flex-col justify-center items-center space-y-4">
                  {["/", "*", "+", "-"].map((button) => (
                    <button
                      key={button}
                      className="hover:bg-blue-700 text-black font-bold rounded-full h-12 w-12 focus:outline-none focus:shadow-outline"
                      onClick={() => handleButtonPress(button)}
                    >
                      {button}
                    </button>
                  ))}
                  <button
                    className="hover:bg-blue-700 text-black font-bold rounded-full h-12 w-12 focus:outline-none focus:shadow-outline"
                    onClick={() => handleButtonPress("=")}
                  >
                    =
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
