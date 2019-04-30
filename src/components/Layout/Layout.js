import React from 'react';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import ProfessionalDetails from '../ProfessionalDetails/ProfessionalDetails';

const Layout = () => {
    return (
        <div className="layout col-md-10 offset-1 h-100 row border mt-3">
            <PersonalDetails />
            <ProfessionalDetails />
        </div>
    );
}

export default Layout;
