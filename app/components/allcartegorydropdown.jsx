import React from "react";
import Image from "next/image";
import shoelink from "../../public/icons/shoes.png";
import computerlink from "../../public/icons/monitor.png";
import mobileLink from "../../public/icons/smartphone.png";
import Watchlink from "../../public/icons/watch.png";
import menlink from "../../public/icons/man.png";
import womenlink from "../../public/icons/woman.png";
import headphonelink from "../../public/icons/headphones.png";
import electronicslink from "../../public/icons/plug.png";

export default function () {
  const herodropdown = [
    {
      title: "Shoe",
      icon: shoelink,
      alt: "item",
    },
    {
      title: "Computer",
      icon: computerlink,
      alt: "computer",
    },
    {
      title: "Mobile",
      icon: mobileLink,
      alt: "mobile",
    },
    {
      title: "Watches",
      icon: Watchlink,
      alt: "watches",
    },
    {
      title: "Men",
      icon: menlink,
      alt: "men",
    },
    {
      title: "Women",
      icon: womenlink,
      alt: "women",
    },
    {
      title: "Headphones",
      icon: headphonelink,
      alt: "headphone",
    },
    {
      title: "Electonics",
      icon: electronicslink,
      alt: "electronics",
    },
  ];

  return (
    <div className=" lg:hidden">
      {herodropdown.map((item, index) => (
        <div
          key={index}
          className=" flex border border-b items-center justify-center space-x-3 py-4  w-[210px] bg-white shadow-md  "
        >
          <Image
            className="block text-[red]"
            src={item.icon}
            alt={item.alt}
            width={20}
            height={20}
          />

          <div className=" text-left w-[50%]">
            <p className="  ">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
