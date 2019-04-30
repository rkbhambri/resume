import React from 'react';
import Heading from '../../Heading/Heading';
import Home from '../../../Images/home.svg';

const Social = () => {
    return (
        <div className="social mt-4">
            <Heading heading="Social Connectivity" />
            <span>
                <img src={Home} style={{ width: '30px', height: '30px' }} />
                <a href="https://github.com/rkbhambri"><span>https://github.com/rkbhambri</span></a>
            </span><br />
            <span>
                <img src={Home} style={{ width: '30px', height: '30px' }} />
                <a href="https://www.linkedin.com/in/rk-bhambri-462778116"><span>https://www.linkedin.com/in/rk-bhambri-462778116</span></a>
            </span><br />
        </div>
    );
}

export default Social;
