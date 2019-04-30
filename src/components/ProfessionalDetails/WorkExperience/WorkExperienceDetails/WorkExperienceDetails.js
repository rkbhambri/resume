import React from 'react';

const WorkExperienceDetails = (props) => {
    return (
        <div className="work-experience-details mt-2">
            <h6 className="company">{props.company}</h6>
            <div className="duration">{props.duration}</div>
            <div className="designation">{props.designation}</div>
            <div className="technology">{props.technology}</div><hr />
        </div>
    );
};

export default WorkExperienceDetails;
