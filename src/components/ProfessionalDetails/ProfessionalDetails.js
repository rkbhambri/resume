import React from 'react';
import Education from './Education/Education';
import CareerObjective from './CarrerObjective/CarrerObjective';
import TechnicalSkills from './TechnicalSkills/TechnicalSkills';
import WorkExperience from './WorkExperience/WorkExperience';
import Projects from './Projects/Projects';

const ProfessionalDetails = (props) => {
    return (
        <div className="professional-details col-md-9 mt-3">
            <CareerObjective />
            <Education />
            <TechnicalSkills />
            <WorkExperience />
            <Projects />
        </div>
    );
};

export default ProfessionalDetails;
