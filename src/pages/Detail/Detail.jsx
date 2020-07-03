import React, { useEffect } from "react";
import LeftArrow from "../../static/images/left-arrow.png";
import GlobalIcon from "../../static/images/global.png";
import ClockIcon from "../../static/images/clock.png";
import { getDaysDiffBetweenDates } from "../../utils/Helper";
import scrollToTop from "../../hooks/useScrollTop";

const Detail = ({ data, clearJobDetails }) => {
    useEffect(() => scrollToTop(), [data]);

    const {
        type,
        title,
        location,
        created_at,
        company,
        company_logo,
        how_to_apply,
        description,
    } = data;

    return (
        <section className="jobDetail">
            <aside className="jobDetail-sideBar">
                <figure className="jobDetail-goBack" onClick={clearJobDetails}>
                    <img src={LeftArrow} alt="left-arrow" />
                    <figcaption>Back to search</figcaption>
                </figure>
                <h3 className="jobDetail-apply__title">How to apply</h3>
                <div
                    className="jobDetail-apply__content"
                    dangerouslySetInnerHTML={{
                        __html: how_to_apply || "",
                    }}
                ></div>
            </aside>

            <section className="jobDetail-main">
                <div className="jobDetail__description">
                    <h2 className="jobDetail__title"> {title || ""}</h2>
                    <p className="jobDetail__type">{type || ""}</p>
                </div>

                <figure className="jobDetail-date">
                    <img
                        src={ClockIcon}
                        alt="clock-icon"
                        className="jobDetail-date__icon"
                    />
                    <figcaption className="jobDetail-date__text">
                        {Math.round(
                            getDaysDiffBetweenDates(
                                new Date(created_at),
                                new Date()
                            )
                        )}{" "}
                        ngày trước
                    </figcaption>
                </figure>

                <figure className="jobDetail-company">
                    <img
                        src={company_logo}
                        alt={title}
                        className="jobDetail-company__logo"
                    />

                    <figcaption>
                        <h3 className="jobDetail-company__name">{company}</h3>

                        <figure className="jobDetail-company__location">
                            <img src={GlobalIcon} alt="global-icon" />
                            <figcaption>{location || ""}</figcaption>
                        </figure>
                    </figcaption>
                </figure>

                <div
                    className="jobDetail__detail"
                    dangerouslySetInnerHTML={{ __html: description }}
                ></div>
            </section>
        </section>
    );
};

export default Detail;
