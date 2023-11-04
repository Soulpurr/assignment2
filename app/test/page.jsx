"use client";
import React, { useState } from "react";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function page() {
  const [isMoon, setIsMoon] = useState(false);

  const handleToggle = () => {
    setIsMoon(!isMoon);
  };

  const icon = isMoon ? <BsFillSunFill /> : <BsFillMoonFill />;
  return (
    <div className="flex justify-center w-full items-center m-8 ">
      <div className="bg-white w-[300px] h-[35rem] rounded-3xl">
        <div className="p-4 flex items-center justify-center">
          <button
            type="button"
            className="rounded-full bg-gray-300 p-2"
            onClick={handleToggle}
          >
            {icon}
          </button>
        </div>
        <div className="pt-[8rem] text-black text-right px-6 font-bold">
          1000x2x2
        </div>
        <div className="flex px-6 justify-between">
          <div className="text-4xl  text-black">=</div>
          <div className="text-4xl text-black font-extrabold">1000</div>
        </div>

        <div className="bg-[#9ecdf9] h-[60%] rounded-3xl">
          <div className="max-w-xs mx-auto flex">
            <div className="flex flex-col  p-[10px] rounded-lg">
              <div className="flex justify-center space-x-6  w-[14rem]  rounded-3xl bg-[#d7e8f8]">
                <button className=" hover:bg-blue-400 text-black font-bold rounded-full h-12 w-12 focus:outline-none focus:shadow-outline">
                  AC
                </button>
                <button className=" hover:bg-blue-400 text-black font-bold rounded-full h-12 w-12 focus:outline-none focus:shadow-outline">
                  =/-
                </button>
                <button className=" hover:bg-blue-400 text-black font-bold rounded-full h-12 w-12 focus:outline-none focus:shadow-outline">
                  %
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "00"].map((button) => (
                  <button
                    key={button}
                    className="bg-[#d7e8f8] hover:bg-blue-700  text-black  font-bold rounded-full h-12 w-12 focus:outline-none focus:shadow-outline"
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-[#d7e8f8]  rounded-3xl my-4">
              <div className="flex flex-col justify-center items-center space-y-4">
                {["/", "*", "+", "-", "="].map((button) => (
                  <button
                    key={button}
                    className="b hover:bg-blue-700 text-black font-bold rounded-full h-12 w-12 focus:outline-none focus:shadow-outline"
                  >
                    {button}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
