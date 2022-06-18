import React from "react";
import DetailsNavbar from "./Navbar/DetailsNavbar";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children, mode }) => {
  let Header;
  switch (mode) {
    case "postDetail":
      Header = <DetailsNavbar />;
      break;
    default:
      Header = <Navbar />;
      break;
  }

  return (
    <>
      {Header}
      <main className="p-4">{children}</main>
    </>
  );
};

export default Layout;
