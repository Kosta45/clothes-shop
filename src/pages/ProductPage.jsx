import React from "react";

import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";

const ProductPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-1 items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-HARVEST-2_360x.jpg?v=1642616536"
            alt="product_image"
            className="w-[80%] h-[80%] rounded-lg shadow-lg
            hover:scale-[1.1] object-cover ease-in duration-300"
          />
        </div>
        <div
          className="flex-[1.3] flex items-start justify-items-start
        flex-col mt-10"
        >
          <h1 className="title text-[40px]">Mustard Hoody Original</h1>
          <p className="pr-[4rem] text-justify mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            voluptas magni laborum vero praesentium enim necessitatibus tenetur
            iste veniam nulla nisi quia accusantium, tempore impedit. Eveniet,
            sequi ex. Cupiditate, odio!
          </p>
          <p className="mt-7 text-3xl">
            Price: <b>$70</b>
          </p>
          <div className="flex text-2xl mt-7">
            Colors
            <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full p-[10px] cursor-pointer border-2 ml-5 hover:border-violet-600"></div>
            <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full p-[10px] cursor-pointer border-2 ml-5  hover:border-violet-600"></div>
            <div className="bg-yellow-400 w-[2rem] h-[2rem] rounded-full p-[10px] cursor-pointer border-2 ml-5  hover:border-violet-600"></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select name="" id="" className="ml-5 border-2">
              <option value="" selected disabled>
                Select
              </option>
              <option value="">Small</option>
              <option value="">Medium</option>
              <option value="">Large</option>
            </select>
          </div>
          <div>
            <Counter />
          </div>
          <button
            className="text-white bg-violet-600 
    rounded-md p-3 ease-in duration-100
    cursor-pointer shadow-md hover:bg-sky-500 mt-5"
          >
            Add to cart
          </button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
