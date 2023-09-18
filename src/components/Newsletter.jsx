import React from "react";

const Newsletter = () => {
  return (
    <div
      className="flex justify-center items-center 
    h-[350px] w-[100%] flex-col bg-[#c4a4f9]"
    >
      <h1>NEWSLETTER</h1>
      <h2>Always in touch with us, for your favourite products</h2>
      <div
        className="flex mt-[3rem] items-center justify-between 
      min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] 
      rounded-[5px] overflow-hidden"
      >
        <input
          type="text"
          placeholder="email"
          className="border-none pl-[29px]
        flex-[7] outline-none"
        />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Newsletter;
