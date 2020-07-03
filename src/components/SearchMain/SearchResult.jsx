import React, { useState, useEffect } from "react";
import SearchResultCard from "../SearchResultCard/SearchResultCard";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";

const SearchResult = ({ data, loading, handleSetJobDetails, isFirstTime }) => {
    const [finalData, setFinalData] = useState(data);
    const [pageNow, setPageNow] = useState(1);

    const setPage = (page) => setPageNow(page);

    useEffect(() => {
        setFinalData(data);
    }, [data]);

    const pageSize = 5;
    const totalPage =
        (data?.length > 0 && Math.ceil(data.length / pageSize)) || 0;
    const pageBound = 5;
    const from = pageSize * (pageNow - 1);
    const to = pageSize * pageNow;

    const currentData =
        !loading &&
        finalData?.length > 0 &&
        finalData.slice(from, Math.min(to, finalData.length));

    return (
        <section className="searchResult">
            {loading ? (
                <Loader />
            ) : (
                (currentData?.length > 0 &&
                    currentData.map((job) => (
                        <SearchResultCard
                            data={job}
                            handleSetJobDetails={handleSetJobDetails}
                        />
                    ))) || (
                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "13px",
                        }}
                    >
                        {isFirstTime ? "" : "No Data Found"}
                    </p>
                )
            )}
            {!loading && data?.length > 0 && (
                <Pagination
                    totalPage={totalPage}
                    pageBound={pageBound}
                    setPage={setPage}
                    pageNow={pageNow}
                />
            )}
        </section>
    );
};

export default SearchResult;
