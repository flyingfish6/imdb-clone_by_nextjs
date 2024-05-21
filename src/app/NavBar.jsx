import NavBarItem from "../components/NavBarItem";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex dark:bg-gray-500 bg-amber-100 p-4 lg:text-lg justify-center gap-5">
      <NavBarItem title="Trending" param="fetchTrending" />
      <NavBarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default NavBar;
