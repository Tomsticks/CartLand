import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import iphone11 from "../../../public/iphone11Promax.png";
import iphone12 from "../../../public/iphone-12promax.png";
import iphonexr from "../../../public/iphone-xr.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../../css/swiper.css";

export default () => {
  const details = [
    {
      top: "Get up to 50% off Today only",
      phone: "Iphone 11 Pro Max",
      currentPrice: "$800.00",
      prevPrice: "$950.00",
      image: iphone11,
    },
    {
      top: "Get up to 50% off Today only",
      phone: "Iphone 12 Pro Max",
      currentPrice: "$950.00",
      prevPrice: "$1000.00",
      image: iphone12,
    },
    {
      top: "Get up to 50% off Today only",
      phone: "Iphone Xr",
      currentPrice: "$350.00",
      prevPrice: "$550.00",
      image: iphonexr,
    },
  ];

  return (
    <Swiper
      onSlideChange={(swiper) => {}}
      className=""
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      //   scrollbar={{ draggable: true }}
      //
    >
      {details.map((items, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center py-8 md:py-28 px-5 md:justify-center justify-around  ">
            <section className=" flex flex-col md:items-center items-start gap-4 py-6 ">
              <p className="">{items.top}</p>
              <h1 className=" flex items-start">
                <p className=" font-bold flex md:items-center md:text-center md:text-[50px]  text-[45px]  ">
                  {items.phone}
                </p>
              </h1>
              <h2 className="flex gap-2 items-center">
                <p className="text-[20px] text-[#FD3D57]">
                  {items.currentPrice}
                </p>
                <del className="text-[15px] text-[gray]">{items.prevPrice}</del>
              </h2>
              <button className="bg-[#FD3D57] px-4 py-3 rounded-md text-[white]">
                Shop Now
              </button>
            </section>

            <section className=" ">
              <Image
                className="  md:hidden"
                src={items.image}
                alt="images of phones"
                width={250}
              />
            </section>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
