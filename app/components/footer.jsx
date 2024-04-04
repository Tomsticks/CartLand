import React from "react";
import Button from "./button";
import "../../css/component.css";
import Twitterlogo from "../../public/twitter.png";
import FacebookLogo from "../../public/facebook.png";
import instagramLogo from "../../public/insta2.png";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#f3f3f3] py-20">
      <div className="sizer mx-auto px-4 sm:px-6 lg:px-8 grid sm:flex sm:flex-col  md:grid-cols-2 grid-cols-4 gap-6">
        <div className="footer-section1 footer-box">
          <div className="footer-box-sub">
            <h1 className="text-primary font-bold text-2xl">
              CART<span className="text-[#2B2D42]">LAND</span>
            </h1>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs the passage.
            </p>
            <div className="sub-section1">
              <h1 className="text-[#2B2D42] font-bold text-2xl">NEWSLETTER</h1>
              <div className="flex items-center w-full  md:flex-col md:items-start space-y-3">
                <div className="py-1 rounded-sm border flex justify-between item-center bg-white">
                  <input
                    placeholder="Your Email Address"
                    className="px-2 outline-none py-1"
                    type="text"
                  />
                </div>
                <button className="bg-primary py-2 px-4 ml-2 text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-box footer-section2">
          <div className="footer-box-sub">
            <h1 className="text-[#2B2D42] font-bold text-2xl">MY ACCOUNT</h1>
            <p>Orders</p>
            <p>Wishlist</p>
            <p>Track Order</p>
            <p>Manage Account</p>
            <p>Return Order</p>
          </div>
        </div>

        <div className="footer-box footer-section3">
          <div className="footer-box-sub">
            <h1 className="text-[#2B2D42] font-bold text-2xl">INFORMATION</h1>
            <p>About Us</p>
            <p>Return Policy</p>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
          </div>
        </div>

        <div className="footer-box footer-section4">
          <div className="footer-box-sub">
            <h1 className="text-[#2B2D42] font-bold text-2xl">CONTACT</h1>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className="">
                7895 Dr New Albuquerque, NM 19800, United States Of America
              </p>
            </div>

            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <p className="">+234 903 578 3851</p>
            </div>

            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <p className="">tomzor@yahoo.com</p>
            </div>
            <div className="logos">
              <Link href="/login">
                <Image
                  alt="Facebook Logo"
                  width={30}
                  height={30}
                  src={FacebookLogo}
                />
              </Link>
              <Link href="/login">
                <Image
                  alt="Twitter Logo"
                  width={30}
                  height={30}
                  src={Twitterlogo}
                />
              </Link>
              <Link href="/login">
                <Image
                  alt="Instagram Logo"
                  width={40}
                  height={40}
                  src={instagramLogo}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
