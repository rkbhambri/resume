import React from 'react';
import Heading from '../../Heading/Heading';
import ProjectsImg from '../../../Images/projects.svg';
import ProjectDetails from './ProjectDetails/ProjectDetails';
import './Projects.css';

const Projects = (props) => {
    const mdm = "Build a analytics Dashboard for MDM using AngularJS, by consuming the analytics API. Dashboard should handle login, render User's Mapping task details, Distributor items/retailer details, search for said items/retailers and handle unmapping/remapping of item from the dashboard directly.";
    const college = "New patient fills online registration form giving all details of their illness. After going through all details doctor either confirms or rejects the registration of patient. All registered patients can book appointment of doctors. Doctors are available on specific dates for consultation.";
    const alternlu = "A powerful interface that enables you to train your conversational agents with high quality training datasets by keeping track of their intents and entities used by bot. In this project I am in charge of designing architecture and frontend development of this product.";
    const drizzle = "Build an interface to create and train your bot training dataset using intent, entities and training sentences with live training of dataset. It is an older version of ALTER NLU with different design and architecture.";
    const burgerApp = "Built a Burger order app in which user can SignUp/SignIn and create his own custom burger   by adding ingredients as required and price of the burger is depend on its ingredients decided by user. I developed this product as a part of my learning process in react.";

    return (
        <div className="projects col-md-12 mt-3 mb-2">
            <div className="row col-md-12 pt-3">
                <img src={ProjectsImg} style={{ width: '30px', height: '30px' }} alt="Not available" />&nbsp;
                <Heading heading="Projects" />
            </div>
            <div className="project-details mt-3">
                <ProjectDetails
                    projectName="Alter Nlu"
                    description={alternlu}
                    technology="ReactJs with Redux, Material UI"
                />
                <ProjectDetails
                    projectName="Drizzle dashboard"
                    description={drizzle}
                    technology="ReactJs with Redux"
                />
                <ProjectDetails
                    projectName="MDM-Analytics Dashboard"
                    description={mdm}
                    technology="Html, Css, Bootstrap, AngularJS"
                />
                <ProjectDetails
                    projectName="Burger React App"
                    description={burgerApp}
                    technology="ReactJs with Redux"
                />
                <ProjectDetails
                    projectName="Doctor-Patient Appointment System"
                    description={college}
                    technology="Html, Css, Bootstrap, Php, Mysql"
                />
            </div>
            <div className="react-projects mt-3">
                <h6>Here below is the link for some more projects built using ReactJs : </h6>
                <a
                    href="https://rkbhambri.github.io/rkbhambri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}>https://rkbhambri.github.io/rkbhambri/</a>
            </div><br />
        </div>
    );
};

export default Projects;
