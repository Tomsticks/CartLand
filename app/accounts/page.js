import React from "react";
import Layout from "../layout/layout";
import Breadcrumbs from "../components/usersComponent/BreadCrumbs";
import AccountView from "../components/usersComponent/AccountView";
export default function Page() {
  return (
    <div>
      <Layout>
        <Breadcrumbs className=" mb-5" links={[{ Home: "/", name: "Home" }]} />
        <AccountView />
      </Layout>
    </div>
  );
}
