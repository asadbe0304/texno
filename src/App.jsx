import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar/index";
import Login from "./pages/Login";
import Sign from "./pages/Register/index";
import { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Category from "./pages/Category/index";
import Main from "./components/Main/index";
import Error from "./error/index";
import { useSelector, useDispatch } from "react-redux";
import { BiCategory } from "react-icons/bi";

const App = () => {
  // const data = useDispatch();
  const [sticky, setSticky] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 120 ? setSticky("sticky") : setSticky("");
    }
  };
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       data({ type: "SET_DATA", payload: json });
  //     });
  // }, []);
  return (
    <>
      <div className={`app-header ${sticky}`}>
        <Header />
        <Navbar />
      </div>
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cat" element={<Category />} />
          <Route path="login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
