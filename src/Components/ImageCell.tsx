"use client"
import React from "react";

import Image from "next/image";

type props = {
  imagePath: string;
};
const ImageCell = ({ imagePath }: props) => {
  return (
    <div className="imgs">
      <Image
        src={`/${imagePath} `}
        alt="Next.js Logo"
        width={102}
        height={102}
      />
    </div>
  );
};

export default ImageCell;
