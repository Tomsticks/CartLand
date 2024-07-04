import React from "react";
import Layout from "../../layout/layout";
import Breadcrumbs from "../../components/usersComponent/BreadCrumbs";
import PersonalInfo from "../../components/usersComponent/PersonalInformation";
export default function Page() {
  return (
    <div>
      <Layout>
        <Breadcrumbs
          className=" mb-5"
          links={[
            { href: "/", name: "Accounts" },
            { href: "/", name: "Profile Information" },
          ]}
        />
        <PersonalInfo />
      </Layout>
    </div>
  );
}
