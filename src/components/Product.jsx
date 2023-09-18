import React, { useState } from "react";

import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Product = ({ item }) => {
  // styles for icons
  const iconsStyle = `h-[40px] w-[40px] rounded-full bg-white 
        flex items-center justify-center m-3
        border-4 border-solid border-indigo-600 hover:text-white hover:bg-indigo-600 
        hover:scale-[1.1] ease-in duration-100 cursor-pointer`;

  const [hoverEffect, setHoverEffect] = useState(" opacity-0");

  const handleHoverEnter = () => {
    setHoverEffect(" opacity-1 bg-[rgba(49,47,47,0.3)] ease-out duration-700");
  };

  const handleHoverExit = () => {
    setHoverEffect(" opacity-0");
  };

  return (
    <div
      className="flex flex-2 item-center justify-center min-w-[300px] min-h-[350px] 
    overflow-hidden rounded-md shadow-lg m-2 mx-8 relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={item.src} alt="product_iamge" />
      <div
        className={
          `flex items-center justify-center 
      w-[100%] h-[100%] absolute ` + hoverEffect
        }
      >
        <div className={iconsStyle}>
          <AddShoppingCartIcon />
        </div>
        <div className={iconsStyle}>
          <StarIcon />
        </div>
        <div className={iconsStyle}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
