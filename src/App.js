import React from "react";
import PageMain from "./Layout/PageMain";
import "./static/css/main.min.css";

const App = () => {
    return (
        <React.Fragment>
            <section className="page-container">
                <header className="page-header">
                    <h3 className="page__title">
                        <b>Github</b> Jobs
                    </h3>
                </header>

                <PageMain />

                <footer className="page-footer">
                    <p>Rikikudo @devchallenges.io</p>
                </footer>
            </section>
        </React.Fragment>
    );
};

export default App;
