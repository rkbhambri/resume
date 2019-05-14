import React from 'react';

const ProjectDetails = (props) => {
    return (
        <div className="projectDetails mt-3">
            <h6 className="project-name">{props.projectName}</h6>
            <div className="description">{props.description}</div>
            <div className="technology mt-2">Technology: {props.technology}</div><hr />
        </div>
    );
};

export default ProjectDetails;
