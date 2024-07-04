import Nav from "../components/mainComponent/nav";
import Header from "../components/mainComponent/header";
import Footer from "../components/mainComponent/footer";
import NavSideBar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className=" ">
      <Header />
      <Nav />
      <div className=" flex gap-14 px-24 sm:px-2 py-10 lg:flex-none  sm:w-[100%]">
        <NavSideBar />
        <main className="w-[100%]">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
