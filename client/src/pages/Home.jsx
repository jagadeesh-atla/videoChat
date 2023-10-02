import React from "react";
import "../styles/Home.scss";
// import Navbar from "../components/Home/Navbar";
import Showcase from "../components/Home/Showcase";
// import Footer from "../components/Home/Footer";

function Home() {
  return (
    <>
      <div className="overlay"></div>
      <div className="main-area">
        {/* <Navbar /> */}
        <Showcase />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
