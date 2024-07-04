"use client";
import React from "react";
import Layout from "../../layout/layout";
import Breadcrumbs from "../../components/usersComponent/BreadCrumbs";
import OrderCancelled from "../../components/usersComponent/Cancellation";
export default function Page() {
  return (
    <div>
      <Layout>
        <Breadcrumbs
          className=" mb-5"
          links={[
            { href: "/", name: "Accounts" },
            { href: "/", name: "Order Cancel" },
          ]}
        />
        <OrderCancelled />
      </Layout>
    </div>
  );
}
