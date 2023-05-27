import React from "react";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
     
      <div>{children}</div>
      <Header />
    </>
  );
};

export default Layout;