import React from "react";
// import Link from 'next/link'
import Image from "next/image";
import { newArrivals } from "../../data/NewArrivalsData";

export default function NewArrivalsCard(props) {
  const data = props.cardTitleDetails;
  return (
    // <div>{
    //     newArrivals.map((Products, index)=>(
    <div className="flex flex-col group w-[250px] sm:w-[150px] md:w-[300px] h-[350px] gap-16 shadow-sm rounded-md relative">
      <div className="overlay invisible transition duration-500 group-hover:visible bg-[#00000020] absolute w-[100%] h-[100%] flex items-center justify-center"></div>
      <section className="image_section h-[50%]">
        <div className="newarrivals_Image bg-[#F3F3F3] h-[200px] flex items-center justify-center">
          <Image className=" w-[70%]" src={data.ProductImage} />
        </div>
      </section>
      <div className="newarrivals_content h-[50%] px-2 gap-3">
        <h1 className="text-[20px]">{data.ProductName}</h1>
        <section className="newarrivals_pricing flex space-x-2">
          <p className="text-primary">{data.currentPrice}</p>
          <del>{data.prevsPrice}</del>
        </section>
        <section className=" flex space-x-2 items-center">
          <Image className=" w-[15px] h-[15px]" src={data.ratings} />
          <Image className=" w-[15px] h-[15px]" src={data.ratings} />
          <Image className=" w-[15px] h-[15px]" src={data.ratings} />
          <Image className=" w-[15px] h-[15px]" src={data.ratings} />
          <Image className=" w-[15px] h-[15px]" src={data.ratings} />

          <p>({data.amountleft})</p>
        </section>
      </div>
    </div>
    // ))
    // }</div>
  );
}
