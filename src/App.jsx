import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar/index";
import Login from "./pages/Login";
import Sign from "./pages/Register/index";
import { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main/index";
import Error from "./error/index";
import Product from "./pages/product/index";
import PageFooter from "./components/InnerFooter/index";
import Categ from "./pages/ProductCategory";
import Info from "./pages/productInfo";
import { useSelector, useDispatch } from "react-redux";
import { BiCategory } from "react-icons/bi";

const App = () => {
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       data({ type: "SET_DATA", payload: json });
  //     });
  // }, []);

  return (
    <>
      <Header/>
      <Navbar />
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/:pro" element={<Product />} />
          <Route path="/catproduct" element={<Categ />} />
          <Route path="/info" element={<Info />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <PageFooter />
      <Footer />
    </>
  );
};

export default App;
