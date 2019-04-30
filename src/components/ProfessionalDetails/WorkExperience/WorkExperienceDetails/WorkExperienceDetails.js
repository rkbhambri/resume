import React from 'react';

const WorkExperienceDetails = (props) => {
    return (
        <div className="work-experience-details">
            <div className="company">{props.company}</div>
            <div className="duration">{props.duration}</div>
            <div className="designation">{props.designation}</div>
            <div className="technology">{props.technology}</div><hr />
        </div>
    );
};

export default WorkExperienceDetails;
