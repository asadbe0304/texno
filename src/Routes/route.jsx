import React from "react";
import { useContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/layout";
import Login from "./../pages/Login/index";
import Sign from "./../pages/Register/index";
import Main from "./../components/Main/index";
import Error from "./../error/index";
import Product from "./../pages/product";
import Categ from "./../pages/ProductCategory/index";
import Info from "./../pages/productInfo";
import Check from "./../pages/buyNow/index";
import Private from "./../private/private";
import Cabinet from "../pages/Cabinet/cabinet";
import Order from "../pages/Order/order";
import AddProduct from "../pages/AddProduct/addProduct";
import RequireAuth from "../layout/RequireAuth";
function index() {
  const ROLES = {
    User: 2001,
    Editor: 1984,
    Admin: 5150,
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="*" element={<Error />} />
        <Route path="/catproduct" element={<Categ />} />
        <Route path="/info" element={<Info />} />
        <Route path="/check" element={<Check />} />
        <Route path="/" element={<Layout />}>
          {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}> */}
            <Route path="/admin" element={<Private />}>
              <Route index element={<Cabinet />} />
              <Route path="order" element={<Order />} />
              {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}> */}
                <Route path="addorder" element={<AddProduct />} />
              {/* </Route> */}
            </Route>
          {/* </Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default index;
