import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <>
      <Announce />
      <Navbar />
      <Slider />
      <Categories />
    </>
  );
};

export default Home;
