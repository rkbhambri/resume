import React from 'react';
import Heading from '../../Heading/Heading';
import Home from '../../../Images/home.svg';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import './Projects.css';

const Projects = (props) => {
    const mdm = "Build a analytics Dashboard for MDM using AngularJS, by consuming the analytics API. Dashboard should handle login, render User's Mapping task details, Distributor items/retailer details, search for said items/retailers and handle unmapping/remapping of item from the dashboard directly.";
    const college = "New patient fills online registration form giving all details of their illness. After going through all details doctor either confirms or rejects the registration of patient. All registered patients can book appointment of doctors. Doctors are available on specific dates for consultation.";
    return (
        <div className="projects col-md-12 mt-3">
            <div className="row col-md-12 ml-1 pt-3">
                <img src={Home} style={{ width: '30px', height: '30px' }} alt="Not available" />&nbsp;
                <Heading heading="Projects" />
            </div>
            <ProjectDetails
                projectName="MDM-Analytics Dashboard"
                description={mdm}
                technology="Html, Css, Bootstrap, AngularJS"
            />
            <ProjectDetails
                projectName="Doctor-Patient Appointment System"
                description={college}
                technology="Html, Css, Bootstrap, Php, Mysql"
            />
            <div className="react-projects mt-3">
                <h6>Here below is the link for some more projects built using ReactJs : </h6>
                <a href="https://rkbhambri.github.io/rkbhambri/" target="_blank" rel="noopener noreferrer">https://rkbhambri.github.io/rkbhambri/</a>
            </div>
        </div>
    );
};

export default Projects;
