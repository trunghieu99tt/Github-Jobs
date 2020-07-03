import React from "react";
import GlobalIcon from "../../static/images/global.png";
import ClockIcon from "../../static/images/clock.png";
import { getDaysDiffBetweenDates } from "../../utils/Helper";

const SearchResultCard = (props) => {
    const { data, handleSetJobDetails } = props;

    const {
        id,
        type,
        title,
        location,
        created_at,
        company,
        company_url,
        company_logo,
    } = data;

    return (
        <article
            className="searchResultCard"
            onClick={() => handleSetJobDetails(data)}
        >
            <figure className="searchResultCard__image-container">
                <img
                    src={company_logo}
                    alt={company}
                    className="searchResultCard__image"
                />
            </figure>

            <div className="searchResultCard-info">
                <a href={company_url} target="_blank">
                    <h4 className="searchResultCard__company">{company}</h4>
                </a>
                <h3 className="searchResultCard__jobTitle">{title}</h3>
                <p className="searchResultCard__jobType">{type}</p>

                <div className="searchResultCard-additionalInfo">
                    <figure className="searchResultCard-additionalInfoItem">
                        <img
                            src={GlobalIcon}
                            alt="global-icon"
                            className="searchResultCard-additionalInfoItem__icon"
                        />
                        <figcaption className="searchResultCard-additionalInfoItem__text">
                            {location}
                        </figcaption>
                    </figure>

                    <figure className="searchResultCard-additionalInfoItem">
                        <img
                            src={ClockIcon}
                            alt="clock-icon"
                            className="searchResultCard-additionalInfoItem__icon"
                        />
                        <figcaption className="searchResultCard-additionalInfoItem__text">
                            {Math.round(
                                getDaysDiffBetweenDates(
                                    new Date(created_at),
                                    new Date()
                                )
                            )}{" "}
                            ngày trước
                        </figcaption>
                    </figure>
                </div>
            </div>
        </article>
    );
};

export default SearchResultCard;
