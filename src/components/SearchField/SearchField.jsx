import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const SearchField = ({ value, onChange, onSubmit }) => {
    return (
        <section
            className="searchField"
            style={{
                background: `url(${require("../../static/images/backgroundImg.png")})`,
            }}
        >
            <form className="searchField-form" onSubmit={onSubmit}>
                <SearchInput value={value} onChange={onChange} />
                <SearchButton />
            </form>
        </section>
    );
};

export default SearchField;
