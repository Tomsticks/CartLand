import React from "react";
import Layout from "../../layout/layout";
import Breadcrumbs from "../../components/usersComponent/BreadCrumbs";
import ManageAddress from "../../components/usersComponent/ManageAddress";
export default function Page() {
  return (
    <div>
      <Layout>
        <Breadcrumbs
          className=" mb-5"
          links={[
            { href: "/", name: "Accounts" },
            { href: "/", name: "Manage Address" },
          ]}
        />
        <ManageAddress />
      </Layout>
    </div>
  );
}
