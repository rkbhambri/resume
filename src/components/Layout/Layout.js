import React from 'react';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import WorkExperience from '../ProfessionalDetails/WorkExperience/WorkExperience';

const Layout = () => {
    return (
        <div className="layout col-md-10 offset-1 h-100 border">
            <PersonalDetails />
            <WorkExperience />
        </div>
    );
}

export default Layout;
