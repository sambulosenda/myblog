import React, { Children } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
