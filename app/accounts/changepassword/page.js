import React from "react";
import Layout from "../../layout/layout";
import Breadcrumbs from "../../components/usersComponent/BreadCrumbs";
import ChangePassword from "../../components/usersComponent/ChangePassword";
export default function Page() {
  return (
    <div>
      <Layout>
        <Breadcrumbs
          className=" mb-5"
          links={[
            { href: "/", name: "Accounts" },
            { href: "/", name: "Change Password" },
          ]}
        />
        <ChangePassword />
      </Layout>
    </div>
  );
}
