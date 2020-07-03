import React from "react";
import GlobalIcon from "../../static/images/global.png";

const SearchSidebar = ({
    onChangeFullTime,
    onChangeLocation,
    location,
    onSubmitLocation,
    onTickLocation,
}) => {
    return (
        <aside className="searchSidebar">
            <div className="checkboxGroup" onClick={onChangeFullTime}>
                <input type="checkbox" name="full-time" id="full-time" />
                <label htmlFor="full-time">Full time</label>
            </div>

            <form className="searchSidebar-search" onSubmit={onSubmitLocation}>
                <label className="searchSidebar-search__label">Location</label>
                <div className="searchSidebar-search__input-container">
                    <img
                        src={GlobalIcon}
                        alt="global-icon"
                        className="searchSidebar-search__icon"
                    />
                    <input
                        type="text"
                        placeholder="City, state, zip code or country"
                        className="searchSidebar-search__input"
                        onChange={onChangeLocation}
                        value={location}
                    />
                </div>
            </form>

            <div className="searchSidebar-filter">
                <div className="checkboxGroup">
                    <input
                        type="checkbox"
                        name="full-time"
                        id="london"
                        checked={location === "london"}
                        onChange={onTickLocation}
                    />
                    <label htmlFor="london">London</label>
                </div>
                <div className="checkboxGroup">
                    <input
                        type="checkbox"
                        name="full-time"
                        id="amsterdam"
                        checked={location === "amsterdam"}
                        onChange={onTickLocation}
                    />
                    <label htmlFor="amsterdam">Amsterdam</label>
                </div>
                <div className="checkboxGroup">
                    <input
                        type="checkbox"
                        name="full-time"
                        id="new-york"
                        checked={location === "new-york"}
                        onChange={onTickLocation}
                    />
                    <label htmlFor="newYork">New York</label>
                </div>
                <div className="checkboxGroup">
                    <input
                        type="checkbox"
                        name="full-time"
                        id="berlin"
                        checked={location === "berlin"}
                        onChange={onTickLocation}
                    />
                    <label htmlFor="berlin">Berlin</label>
                </div>
            </div>
        </aside>
    );
};

export default SearchSidebar;
