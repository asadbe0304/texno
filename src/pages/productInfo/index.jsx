import React from "react";
import Img from "./../../assets/images/22.webp";
import Prod from "./../../ui/XitProduct/index";
import Load from "./../../ui/Loader";
import Dropdown from "./dropdown";
import SingleCard from "./singleCard";
import Brand from "./../../ui/Brand";
import Filter from "./filter";
import Pagination from "../../components/pagination/pagination";
import { CartState } from "../../context/Auth";
import { useEffect, useState } from "react";
import "./style.scss";

const index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const {
    state: { product, cart, like },
    dispatch,
  } = CartState();

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = product.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <div className="bg-white">
        <div className="container">
          <div className="product-info d-flex flex-column align-itmes-start justify-content-between">
            <div className="info-top my-3 text-secondaryflex-wrap  w-100">
              <Dropdown />
              <div className="text-secondary text-end">1054 товара</div>
            </div>
            <h3>Телевизоры</h3>
            <div className="d-flex justify-content-center product-all-filter align-items-start w-100">
              <Filter />
              <div className="product-alls w-75 d-flex align-items-center">
                <div className="product-all justify-content-start w-100">
                  {currentPosts.length > 0 ? (
                    currentPosts.map((e) => {
                      return <SingleCard prod={e} key={e.id} />;
                    })
                  ) : (
                    <Load />
                  )}
                </div>
                <div className="my-4 d-flex justify-content-center align-items-center">
                  <Pagination
                    totalPosts={product.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                  />
                </div>
              </div>
            </div>
            <div className="my-4">
              <Brand />
            </div>
            <div className="my-4 px-3">
              <Prod />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
