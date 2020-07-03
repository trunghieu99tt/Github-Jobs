import React, { useState } from "react";
import SearchField from "../../components/SearchField";
import SearchMain from "../../components/SearchMain";
import { useSessionStorage } from "../../hooks/useSessionStorage";

const SearchPage = ({ handleSetJobDetails }) => {
    const [searchField, setSearchField] = useState("");
    const [data, setData] = useSessionStorage("data", null);
    const [isLoading, setIsLoading] = useState(false);
    const [submittedValue, setSubmittedValue] = useSessionStorage(
        "submittedValue",
        ""
    );
    const [firstTime, setFirstTime] = useState(true);

    const onChangeSearchField = (event) => setSearchField(event.target.value);

    const onSubmitSearchField = (event) => {
        event.preventDefault();
        fetchDataSearchField();
    };

    const fetchDataSearchField = async () => {
        setSubmittedValue(searchField);
        if (firstTime) setFirstTime(false);
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const url = `${proxyUrl}https://jobs.github.com/positions.json?description=${searchField}`;
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setIsLoading(false);
            setData(data);
        } catch (err) {
            console.log("err", err);
        }
    };

    return (
        <section className="searchPage">
            <SearchField
                onChange={onChangeSearchField}
                value={searchField}
                onSubmit={onSubmitSearchField}
            />
            <SearchMain
                data={data}
                searchField={submittedValue}
                loading={isLoading}
                handleSetJobDetails={handleSetJobDetails}
                isFirstTime={firstTime}
            />
        </section>
    );
};

export default SearchPage;
