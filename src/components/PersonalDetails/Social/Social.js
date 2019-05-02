import React from 'react';
import Heading from '../../Heading/Heading';
import Github from '../../../Images/github.svg';
import LinkedIn from '../../../Images/linkedin.svg';

const Social = () => {
    return (
        <div className="social mt-4">
            <Heading heading="Social Connectivity" /><hr />
            <span>
                <img src={Github} style={{ width: '25px', height: '25px' }} alt="Not available" />
                <a
                    href="https://github.com/rkbhambri"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}>&nbsp;<span>https://github.com/rkbhambri</span></a>
            </span><br />
            <span style={{ display: 'block' }} className="mt-2">
                <img src={LinkedIn} style={{ width: '25px', height: '25px' }} alt="Not available" />
                <a
                    href="https://www.linkedin.com/in/rk-bhambri-462778116"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}>&nbsp;<span>https://www.linkedin.com/in/rk-bhambri-462778116</span></a>
            </span><br />
        </div>
    );
}

export default Social;
