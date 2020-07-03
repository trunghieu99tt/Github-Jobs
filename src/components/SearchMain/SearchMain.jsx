import React, { useState, useEffect } from "react";
import SearchSidebar from "./SearchSidebar";
import SearchResult from "./SearchResult";

const SearchMain = ({
    data,
    searchField,
    loading,
    handleSetJobDetails,
    isFirstTime,
}) => {
    const [jobLocation, setJobLocation] = useState("");
    const [jobData, setJobData] = useState(data);
    const [fullTime, setFullTime] = useState(false);
    const [isLoading, setIsLoading] = useState(loading);
    const [tickChanged, setTickChanged] = useState(true);

    const filterFetch = async () => {
        if (searchField) {
            const proxyUrl = "https://cors-anywhere.herokuapp.com/";
            const url = `${proxyUrl}https://jobs.github.com/positions.json?description=${searchField}&location=${jobLocation}&full_time=${fullTime}`;
            setIsLoading(true);
            try {
                const response = await fetch(url);
                const data = await response.json();
                setIsLoading(false);
                setJobData(data);
            } catch (error) {
                console.log("error", error);
            }
        }
    };

    const onChangeLocation = (event) => {
        setJobLocation(event.target.value);
    };

    const onChangeFullTime = () => {
        setFullTime((value) => !value);
        filterFetch();
    };

    const onSubmitLocation = (event) => {
        event.preventDefault();
        filterFetch();
    };

    const onTickLocation = (event) => {
        setJobLocation(event.target.id);
        setTickChanged((value) => !value);
    };

    useEffect(() => {
        setJobData(data);
        setJobLocation("");
        setFullTime(false);
    }, [data]);

    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    useEffect(() => {
        filterFetch();
    }, [tickChanged]);

    let finalData = (jobData && [...jobData]) || [];

    return (
        <section className="searchMain">
            <SearchSidebar
                onChangeLocation={onChangeLocation}
                onChangeFullTime={onChangeFullTime}
                location={jobLocation}
                onSubmitLocation={onSubmitLocation}
                onTickLocation={onTickLocation}
            />
            <SearchResult
                data={finalData}
                loading={isLoading}
                key={Math.random()}
                handleSetJobDetails={handleSetJobDetails}
                isFirstTime={isFirstTime}
            />
        </section>
    );
};

export default SearchMain;
