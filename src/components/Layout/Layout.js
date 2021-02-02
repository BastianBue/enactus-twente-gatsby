import React from "react";

import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "space-between",
        minHeight: "100vh",
      }}>
      <div style={{ flexGrow: "1" }}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
