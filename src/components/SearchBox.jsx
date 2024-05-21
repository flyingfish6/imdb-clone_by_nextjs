"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    if (!search) return null;
    router.push(`/search/${search}`);
  };
  return (
    <form
      className="flex max-w-6xl mx-auto justify-between item-center px-5"
      onSubmit={handleSubmit}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
        className=" w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
      />
      <button
        disabled={!search}
        className="hover:text-amber-500 disabled:text-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
