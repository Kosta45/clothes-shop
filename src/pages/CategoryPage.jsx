import React from "react";

import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const CategoryPage = () => {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">Men's Cloth</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex">
            <p>Filter by:</p>
            <select name="" id="" className="ml-3 border-2 border-silver">
              <option value="" selected disabled>
                Size
              </option>
              <option value="">Small</option>
              <option value="">Meidum</option>
              <option value="">Large</option>
            </select>
            <select name="" id="" className="ml-3 border-2 border-silver">
              <option value="" selected disabled>
                Color
              </option>
              <option value="">Red</option>
              <option value="">Yellow</option>
              <option value="">Blue</option>
            </select>
          </div>
          <div className="flex">
            <p>Sort by</p>
            <select name="" id="" className="ml-3 border-2 border-silver">
              <option value="">Newset (firts)</option>
              <option value="">Oldest (firts)</option>
              <option value="">Price (Asc)</option>
              <option value="">Price (Des)</option>
            </select>
          </div>
        </div>
      </div>
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
