import React from 'react';
import Heading from '../../Heading/Heading';
const Portfolio = () => {
    return (
        <div className="portfolio">
            <Heading heading="Portfolio" /><hr />
            <span className="link">
                <a
                    href="https://rkbhambri.github.io/rkbhambri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', fontSize: '15.4px' }}>https://rkbhambri.github.io/rkbhambri/ </a>
            </span><br /><br />
        </div>
    );
}

export default Portfolio;
