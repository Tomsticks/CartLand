import React from "react";
import Image from "next/image";
import AccountView from "./AccountView";
import BreadCrumbs from "./BreadCrumbs";
export default function Accounts() {
  return (
    <div className="sizer my-6">
      <section className="flex space-x-3 my-5 ">
        <BreadCrumbs
          links={[
            { name: "Home", href: "/" },
            { name: "Account", href: "/accounts" },
          ]}
        />
      </section>
    </div>
  );
}
