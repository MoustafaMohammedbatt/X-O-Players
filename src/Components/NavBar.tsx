import React from "react";

import Image from "next/image";
const NavBar = () => {
  return (
    <ul>
      <li>
      <img
        className="navimg"
        src={"/Logo.jpg"}
        alt="Next.js Logo"
        width={50}
        height={50}
      />
      </li>
    </ul>
  );
};

export default NavBar;
