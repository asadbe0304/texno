import React from "react";

const Pagination = ({
    totalPosts,
    allpostsPerPage,
    setAllCurrentPage,
    allcurrentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / allpostsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination d-flex gap-2 '>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setAllCurrentPage(page)}
                        className={page == allcurrentPage ? "active btn" : "btn"}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;