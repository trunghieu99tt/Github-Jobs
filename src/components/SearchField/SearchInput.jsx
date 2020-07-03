import React from "react";
import WorkIcon from "../../static/images/work.png";

const SearchInput = ({ value, onChange }) => {
    return (
        <div className="searchField__input-container">
            <img src={WorkIcon} alt="work-icon" className="searchField__icon" />

            <input
                type="text"
                value={value}
                onChange={onChange}
                className="searchField__input"
                placeholder="Title, companies, expertise or benefits"
            ></input>
        </div>
    );
};

export default SearchInput;
