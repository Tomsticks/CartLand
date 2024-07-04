import React from "react";
import Image from "next/image";
import { listTopranking } from "../../../data/Ranking";

// console.log(listTopranking);

export default function Topranking() {
  return (
    <div className="mt-10">
      <h1 className=" text-center mb-9 text-xl font-extrabold">Top Ranking</h1>

      <div className=" sizer  py-10 grid place-items-center grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
        {listTopranking.map((items, index) => (
          <div key={index} className="flex flex-col item-center gap-6 ">
            <h1>{items.Title}</h1>
            {items.Goods.map((goods, index) => (
              <div
                key={index}
                className=" flex  flex-col items-center md:flex-col md:space-x-5  "
              >
                <div className=" bg-[#F2F0F0] rounded-md relative h-[80px] py-10 flex items-center justify-center px-4  ">
                  <div className="image-sizer  w-[60px]">
                    <Image
                      className="w-[100%] h-[100%]"
                      src={goods.image}
                      alt="images of phones"
                      // height={10}
                      // width={80}
                    />
                  </div>

                  <p className="ranking absolute text-white top-0 right-0 bg-primary px-2   rounded-bl-md">
                    {goods.ranking}
                  </p>
                </div>

                <div className="ranking-content flex flex-col items-center">
                  <h3 className=" text-[15px] sm:text-[16px]">
                    {goods.itemName}
                  </h3>
                  <div className="ranking-prices flex space-x-2 text-[10px]">
                    <h3 className="text-[14px] text-primary">
                      {goods.currentPrice}
                    </h3>
                    <del className="text-[13px]">{goods.PreviousPrice}</del>
                  </div>
                  <section className="flex  space-x-3">
                    <p className="text-[11px]">RATINGS</p>
                    <h2 className="text-[11px]">{goods.itemsLeft}</h2>
                  </section>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
