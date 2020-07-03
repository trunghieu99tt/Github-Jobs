/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";

const Pagination = ({ totalPage, pageBound, setPage, pageNow }) => {
    const [currentPage, setCurrentPage] = useState(pageNow);
    const [upperPageBound, setUpperPageBound] = useState(pageBound);
    const [lowerPageBound, setLowerPageBound] = useState(0);
    const [isPrevBtnActive, setIsPrevBtnActive] = useState(
        pageNow > 1 ? "" : "disabled"
    );
    const [isNextBtnActive, setIsNextBtnActive] = useState(
        pageNow + 1 < upperPageBound ? "" : "disabled"
    );

    const setPrevAndNextBtnClass = (listID) => {
        setIsNextBtnActive("disabled");
        setIsPrevBtnActive("disabled");

        if (totalPage === listID && totalPage > 1) {
            setIsPrevBtnActive("");
        } else if (listID === 1 && totalPage > 1) {
            setIsNextBtnActive("");
        } else if (totalPage > 1) {
            setIsPrevBtnActive("");
            setIsNextBtnActive("");
        }
    };

    const changePageBoundary = (isIncrement = 1) => {
        setUpperPageBound(upperPageBound + pageBound * isIncrement);
        setLowerPageBound(lowerPageBound + pageBound * isIncrement);
    };

    const changeListID = (id) => {
        setCurrentPage(id);
        setPage(id);
        setPrevAndNextBtnClass(id);
    };

    const handleChoosePage = (event) => {
        const listID = Number(event.target.id);
        changeListID(listID);
    };

    const goToNextPages = () => {
        changePageBoundary();
        const listID = upperPageBound + 1;
        changeListID(listID);
    };

    const goToPrevPages = () => {
        changePageBoundary(-1);
        const listID = upperPageBound - pageBound;
        changeListID(listID);
    };

    const goToPrevPage = () => {
        if ((currentPage - 1) % pageBound === 0) {
            changePageBoundary(-1);
        }
        const listID = currentPage - 1;
        changeListID(listID);
    };

    const goToNextPage = () => {
        if (currentPage + 1 > upperPageBound) {
            changePageBoundary();
        }
        const listID = currentPage + 1;
        changeListID(listID);
    };

    // Logic for displaying page numbers
    const pageNumbers = [...Array(totalPage)].map((_, idx) => idx + 1);
    const renderPageNumbers =
        (pageNumbers &&
            pageNumbers.length > 0 &&
            pageNumbers
                .filter((e) => e < upperPageBound + 1 && e > lowerPageBound)
                .map((pageNumber) => {
                    return (
                        <li
                            key={pageNumber}
                            className={`pagination-item
                                ${
                                    pageNumber === currentPage
                                        ? "pagination-item--active"
                                        : ""
                                }
                            `}
                            id={pageNumber}
                            onClick={handleChoosePage}
                        >
                            <button id={pageNumber}>{pageNumber}</button>
                        </li>
                    );
                })) ||
        null;

    const pageIncrementBtn =
        (pageNumbers.length > upperPageBound && (
            <li className="pagination-item" onClick={goToNextPages}>
                <button> &hellip; </button>
            </li>
        )) ||
        null;

    const pageDecrementBtn =
        (lowerPageBound >= 1 && (
            <li className="pagination-item" onClick={goToPrevPages}>
                <button> &hellip; </button>
            </li>
        )) ||
        null;

    const renderPrevBtn =
        (isPrevBtnActive !== "disabled" && (
            <li
                className={`${isPrevBtnActive} pagination-item`}
                onClick={goToPrevPage}
            >
                <button id="btnPrev">{"<"}</button>
            </li>
        )) ||
        null;

    const renderNextBtn =
        (isNextBtnActive !== "disabled" && (
            <li
                className={`${isNextBtnActive} pagination-item`}
                onClick={goToNextPage}
            >
                <button id="btnNext">{">"}</button>
            </li>
        )) ||
        null;

    return (
        <div className="section-container pagination-container">
            <ul className="pagination">
                {renderPrevBtn}
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                {renderNextBtn}
            </ul>
        </div>
    );
};

export default Pagination;
