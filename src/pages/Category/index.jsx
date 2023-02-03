import React from "react";
import "./style.scss";
import Card from "./../../pages/Category/index";
import {useParams} from "react-router-dom"

const index = () => {
    // const {list}= useParams() 
  return (
    <>
      <div className="category-page">
        <div className="container">
          <div className="category-card">
            <div className="category-content d-flex justify-content-between align-items-start flex-wrap gap-2">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
