"use client";
import React from "react";
import Layout from "../../layout/layout";
import Breadcrumbs from "../../components/usersComponent/BreadCrumbs";
import OrderHistory from "../../components/usersComponent/OrderHistory";
export default function Page() {
  return (
    <div>
      <Layout>
        <Breadcrumbs
          className=" mb-5"
          links={[
            { href: "/", name: "Accounts" },
            { href: "/", name: "Order History" },
          ]}
        />
        <OrderHistory />
      </Layout>
    </div>
  );
}
