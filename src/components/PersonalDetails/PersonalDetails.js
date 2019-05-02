import React from 'react';
import Name from './Name/Name';
import Details from './Details/Details';
import Social from './Social/Social';
import Languages from './Languages/Languages';
import Hobbies from './Hobbies/Hobbies';
import CoCurricularActivities from './CoCurricularActivities/CoCurricularActivities';
import './PersonalDetails.css';

const PersonalDetails = (props) => {
    return (
        <div className="personal-details h-100 col-md-3">
            <Name />
            <Details />
            <Social />
            <Languages />
            <Hobbies />
            <CoCurricularActivities />
        </div>
    );
}

export default PersonalDetails;
