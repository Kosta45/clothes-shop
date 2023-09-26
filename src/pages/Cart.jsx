import React from "react";

import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";

const Cart = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="m-4">
        <div className="flex justify-center text-5xl">Cart</div>
        <div
          className="flex items-center justify-between
        mt-4"
        >
          <button
            className="text-[#8a4af3] bg-white
    rounded-md p-3 ease-in duration-100 border-2 border-[#8a4af3]
    cursor-pointer shadow-md hover:bg-sky-500"
          >
            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor:pointer">
            <p>Item in your Cart: 3</p>
            <p className="ml-5">Wishlist: Item 0</p>
          </div>
          <button
            className="text-[#8a4af3] bg-white
    rounded-md p-3 ease-in duration-100 border-2 border-[#8a4af3]
    cursor-pointer shadow-md hover:bg-sky-500"
          >
            Checkout
          </button>
        </div>

        <div className="flex mt-7">
          <div className="flex flex-col flex-1">
            {/* List of products */}
            <div className="flex w-[100%] h-auto items-center">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg 
                  hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/WithinYourselfLongSleeveT-ShirtinElectricBlue04_360x.jpg?v=1642719824"
                  alt="product_img"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>12345678
                  </p>
                  <p>
                    <b className="mr-2">Product:</b> Dazzing Sky Shirt
                  </p>
                  <p className="flex item-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div
                      className="bg-blue-600 w-[20px] h-[20px] 
                    rounded-full p-[10px] cursor-pointer border-2 ml-1"
                    ></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col justify-center
              items-center flex-auto"
              >
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className="mt-7 mb-7" />

            {/* 2nd product */}
            <div className="flex w-[100%] h-auto items-center">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg 
                  hover:scale-[1.1] ease-in duration-300"
                  src="https://cdn.shopify.com/s/files/1/0240/7285/products/KushJonesLST-ShirtinBlack09_360x.jpg?v=1642719733"
                  alt="product_img"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>12345678
                  </p>
                  <p>
                    <b className="mr-2">Product:</b> Dazzing Sky Shirt
                  </p>
                  <p className="flex item-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div
                      className="bg-blue-600 w-[20px] h-[20px] 
                    rounded-full p-[10px] cursor-pointer border-2 ml-1"
                    ></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b>lg
                  </p>
                </div>
              </div>

              <div
                className=" flex flex-col justify-center
              items-center flex-auto"
              >
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex p-5 w-auto h-[40vh] flex-[0.4]
          border-2 border-[#8a4af3] rounded-md shadow-lg
          flex-col items-center"
          >
            <h1 className="text-[2rem]">Summary</h1>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Subtotal</p>
              <p>$140</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping</p>
              <p>$40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%]">
              <p>Shipping discount</p>
              <p>-$40</p>
            </div>
            <div className="flex justify-between mt-3 w-[100%] text-3xl font-bold">
              <p>Total</p>
              <p>$140</p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Cart;
