"use client";
import React from "react";
import Layout from "../../layout/layout";
import Breadcrumbs from "../../components/usersComponent/BreadCrumbs";
import Wishlist from "../../components/usersComponent/Wishlist";
export default function Page() {
  return (
    <div>
      <Layout>
        <Breadcrumbs
          className=" mb-5"
          links={[
            { href: "/", name: "Accounts" },
            { href: "/", name: "WishList" },
          ]}
        />
        <Wishlist />
      </Layout>
    </div>
  );
}
