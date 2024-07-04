"use client";
import React from "react";
import iphone12 from "../../../public/iphone11Promax.png";
import { canOrders } from "@/data/CancelledOrders";
import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
export default function OrderHistory() {
  return (
    <div className=" py-2 justify-between items-center px-5">
      {canOrders.map((items, index) => (
        <div className="py-2 px-5 shadow-md">
          <section
            key={index}
            className="py-6 flex justify-between items-center px-5 "
          >
            <Image src={items.device} alt="iphone12" className=" w-20" />
            <Button className=" outline rounded-none outline-1 outline-primary bg-white text-primary">
              View Order
            </Button>
          </section>

          <section className="py-2 flex justify-between items-center px-5">
            <div className="">
              <Typography>Order Number</Typography>
              <p>{items.OrderNumber}</p>
            </div>
            <div className="">
              <Typography>Purchased</Typography>
              <p>{items.Purchased}</p>
            </div>
            <div className="">
              <Typography>Quantity</Typography>
              <p>{items.Quantity}</p>
            </div>
            <div className="">
              <Typography>Status</Typography>
              <p
                className="text-red-500"
                // className={`${
                //   items.Status == "Cancelled"
                //     ? "text-red-500"
                //     : "text-green-500"
                // }`}
              >
                {items.Status}
              </p>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
