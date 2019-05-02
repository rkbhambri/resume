import React from 'react';
import Heading from '../../Heading/Heading';
import WorkExperienceImg from '../../../Images/work-experience.svg';
import WorkExperienceDetails from './WorkExperienceDetails/WorkExperienceDetails';
import './WorkExperience.css';

const WorkExperience = (props) => {
    return (
        <div className="work-experience col-md-12 mt-3">
            <div className="row col-md-12 pt-3">
                <img src={WorkExperienceImg} style={{ width: '28px', height: '28px' }} alt="Not available" />&nbsp;&nbsp;
                <Heading heading="Professional Experience" />
            </div>
            <div className="work-experience-details mt-3">
                <WorkExperienceDetails
                    company="Kontiki AI"
                    duration="09-07-2018 - Present"
                    designation="Frontend Developer"
                    technology="ReactJs and Redux"
                />
                <WorkExperienceDetails
                    company="Capgemini"
                    duration="14-06-2017 - 03-07-2018"
                    designation="Software Engineer"
                    technology="Microsoft Business Intelligence (SSIS, Sql Server, PowerBI)"
                />
                <WorkExperienceDetails
                    company="MyPOS Technologies"
                    duration="15-03-2017 - 13-06-2017"
                    designation="Intern"
                    technology="Html, Css, Bootstrap, AngularJs"
                />
            </div>
        </div>
    );
};

export default WorkExperience;
