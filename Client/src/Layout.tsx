import { Outlet } from "react-router-dom";
import Navbar from "./components/header/navbar";
import Footer from "./components/footer";

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
