import React from 'react';
import Home from '../../../Images/home.svg';
import Email from '../../../Images/email.svg';
import Contact from '../../../Images/contact.svg';
import './Details.css';

const Details = () => {
    return (
        <div className="details">
            <span>
                <img src={Home} style={{ width: '25px', height: '25px' }} alt="Not available" />&nbsp;<span>India</span>
            </span><br />
            <span>
                <img src={Email} style={{ width: '25px', height: '25px' }} alt="Not available" />&nbsp;<span>rkbhambri09@gmail.com</span>
            </span><br />
            <span>
                <img src={Contact} style={{ width: '25px', height: '25px' }} alt="Not available" />&nbsp;<span>+91 8146698440</span>
            </span><br /><br />
            <div className="date-place-of-birth">
                <div className="dob-heading">
                    Date/Place of birth
                </div>
                <div className="dob mt-2">12-05-1995</div>
                <div className="pob">Jalandhar, Punjab</div>
            </div>
        </div>
    );
};

export default Details;
