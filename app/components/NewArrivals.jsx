import React from "react";
import NewArrivalsCard from "./NewArrivalsCard";
import Link from "next/link";
import { newArrivals } from "@/data/NewArrivalsData";
import "../../css/component.css";

export default function NewArrivals() {
  return (
    <div className="mt-10">
      <section className="sizer flex justify-between px-3 gap-3 ">
        <h1 className="text-[25px] ">New Arrivals</h1>
        <Link className=" flex " href="/productPage">
          See More{" "}
        </Link>
      </section>
      <div className="sizer py-6 grid place-items-center grid-cols-4 lg:grid-cols-2 sm:flex sm:flex-col sm:items-center">
        {newArrivals.map((cards, index) => (
          <NewArrivalsCard key={index} cardTitleDetails={cards} />
        ))}
      </div>
    </div>
  );
}
