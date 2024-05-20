"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";
const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mount, setMount] = useState(false);
  useEffect(() => setMount(true), [mount]);
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {mount && currentTheme === "dark" ? (
        <MdDarkMode
          onClick={() => setTheme("light")}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      ) : (
        <MdLightMode
          onClick={() => setTheme("dark")}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
