import React from "react";
import Slide from "./swiper";
import Cartegory from "./allcartegorydropdown";

export default function hero() {
  return (
    <div className="flex sizer">
      <Cartegory />
      <Slide />
    </div>
  );
}
