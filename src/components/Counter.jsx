import React from "react";

const Counter = () => {
  return (
    <div className="mt-5 flex items-center justify-center text-2xl">
      <div className="flex items-center">
        Quantity
        <div className="ml-5 shadow-md flex">
          <div
            className="bg-[#8a4af3] text-white w-8 flex 
            items-center justify-center cursor-pointer rounded-l-md"
          >
            -
          </div>
          <div className="w-8 flex items-center justify-center border-[2px] border-[#8a4af3]">
            1
          </div>
          <div
            className="bg-[#8a4af3] text-white w-8 flex 
            items-center justify-center cursor-pointer rounded-r-md"
          >
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
