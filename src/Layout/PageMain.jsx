import React, { useState } from "react";
import SearchPage from "../pages/SearchPage";
import Detail from "../pages/Detail";

const PageMain = () => {
    const [jobDetails, setJobDetails] = useState(null);

    const handleSetJobDetails = (job) => setJobDetails(job);
    const clearJobDetails = () => setJobDetails(null);

    return (
        <React.Fragment>
            {(!jobDetails && (
                <SearchPage handleSetJobDetails={handleSetJobDetails} />
            )) || (
                <Detail data={jobDetails} clearJobDetails={clearJobDetails} />
            )}
        </React.Fragment>
    );
};

export default PageMain;
