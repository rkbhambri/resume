import React from 'react';

const ProjectDetails = (props) => {
    return (
        <div className="projectDetails">
            <h5 className="project-name">{props.projectName}</h5>
            <div className="description">{props.description}</div>
            <div className="technology">Technology: {props.technology}</div>
        </div>
    );
};

export default ProjectDetails;
