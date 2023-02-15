import React from "react";
import { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./../pages/Login/index";
import Sign from "./../pages/Register/index";
import Main from "./../components/Main/index";
import Error from "./../error/index";
import Product from "./../pages/product";
import Categ from "./../pages/ProductCategory/index";
import Info from "./../pages/productInfo";
import Check from "./../pages/buyNow/index";
import Private from "./../private/private";

function index() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="*" element={<Error />} />
        <Route path="/pro" element={<Product />} />
        <Route path="/catproduct" element={<Categ />} />
        <Route path="/info" element={<Info />} />
        <Route path="/check" element={<Check />} />
        <Route path="/admin" element={<Private />} />
      </Routes>
    </>
  );
}

export default index;
