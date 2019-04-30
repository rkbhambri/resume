import React from 'react';
import Heading from '../../Heading/Heading';
import Home from '../../../Images/home.svg';
import './CareerObjective.css';

const CareerObjective = (props) => {
    return (
        <div className="career-objective col-md-12">
            <div className="row col-md-12 pt-3">
                <img src={Home} style={{ width: '30px', height: '30px' }} alt="Not available" />&nbsp;
                <Heading heading="Career Objective" />
            </div>
            <p className="mt-2">
                To work in an organization which provides opportunities to explore and enhance my technical
                skill set, and achieve personnel growth continuing for self-improvement and contribution towards
                the growth of organization & society.
            </p><br />
        </div>
    );
};

export default CareerObjective;
