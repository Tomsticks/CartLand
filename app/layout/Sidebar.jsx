"use client";
import React from "react";
import Image from "next/image";
import "../../css/component.css";
import { usePathname } from "next/navigation";
export default function navSideBar({}) {
  const pathname = usePathname();
  return (
    <div className="sizer  my-6 w-[30%] lg:hidden">
      <section className="  space-y-2   ">
        <div className="profile flex border shadow-md py-2 px-4 ">
          <Image src="" alt="" className="" />
          <div className="flex flex-col justify-center ">
            <p>Hello,</p>
            <h2>Tomzor</h2>
          </div>
        </div>

        <section className="flex flex-col space-y-9 shadow-md account_sidebar items-center ">
          <div className="flex flex-col justify-center  ">
            <a
              href="/accounts"
              className={`flex ${
                pathname === "/accounts" ? "text-primary" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                />
              </svg>
              Manage My Account
            </a>
            <a
              className={` ${
                pathname === "/accounts/profileinfo" ? "text-primary" : ""
              }`}
              href="/accounts/profileinfo"
            >
              Profile Information
            </a>
            <a
              className={` ${
                pathname === "/accounts/manageaddress" ? "text-primary" : ""
              }`}
              href="/accounts/manageaddress"
            >
              Manage Address
            </a>
            <a
              className={` ${
                pathname === "/accounts/changepassword" ? "text-primary" : ""
              }`}
              href="/accounts/changepassword"
            >
              Change Password
            </a>
          </div>
          {/* Second Section */}
          <div className="flex flex-col justify-center ">
            <a
              href="/accounts/orderhistory"
              className={`flex ${
                pathname === "/accounts/orderhistory" ? "text-primary" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
              My Order History
            </a>
            <a
              className={` ${
                pathname === "/accounts/returns" ? "text-primary" : ""
              }`}
              href="/accounts/returns"
            >
              My Returns
            </a>

            <a
              className={` ${
                pathname === "/accounts/cancellation" ? "text-primary" : ""
              }`}
              href="/accounts/cancellation"
            >
              My Cancellations
            </a>
            <a
              className={` ${
                pathname === "/accounts/myreviews" ? "text-primary" : ""
              }`}
              href="/accounts/myreviews"
            >
              My Reviews
            </a>
          </div>

          <div className="account_sidebar">
            <a href="/accounts/wishlist" className=" flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              My Wishlist
            </a>{" "}
          </div>
          <div className="flex flex-col justify-center ">
            <a href="/login" className="  flex gap-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                />
              </svg>
              LogOut
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}
