import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Footer = () => {
  return (
    <div className="flex items-center justify-around p-2">
      <div className="flex-1 flex flex-col flex-wra p-2">
        {/* Store information */}
        <h1 className="text-[25px]">ClouthesShoes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, enim
          repellendus earum nostrum dicta et culpa omnis libero aperiam sed
          voluptatibus voluptates! Ratione facere est temporibus! Dolore quia ut
          perspiciatis!
        </p>
        <div className="flex item-center justify-center mt-3 self-start">
          <div className="m-3 rounded-full curor-pointer p-2 text-white bg-rose-500">
            <InstagramIcon />
          </div>
          <div className="m-3 rounded-full curor-pointer p-2 text-white bg-blue-600">
            <LinkedInIcon />
          </div>
          <div className="m-3 rounded-full curor-pointer p-2 text-white bg-sky-500">
            <TelegramIcon />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <LocationOnIcon />
          <p className="pl-3">Bergen</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneIcon />
          <p className="pl-3">+01234567</p>
        </div>
        <div className="flex m-3">
          <AlternateEmailIcon />
          <p className="pl-3">email@email.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
