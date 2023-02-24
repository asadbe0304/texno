import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer";
import PageFooter from "./components/Footer/InnerFooter/index";
import Roters from "./Routes/route";
import Loading from "./ui/Upload/index"
import { useState, useEffect } from "react";
const App = () => {
  const [padding, setPadding] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickPad);
    return () => window.removeEventListener("scroll", stickPad);
  }, []);

  const stickPad = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 152 ? setPadding("navPad") : setPadding("");
    }
  };
  return (
    <>
    <Loading/>
      <Header />
      <Navbar />
      <main className={`site-main ${padding}`}>
        <Roters />
      </main>
      <PageFooter />
      <Footer />
    </>
  );
};

export default App;
