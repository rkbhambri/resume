import React from 'react';
import Heading from '../../Heading/Heading';
import Home from '../../../Images/home.svg';
import Qualification from './Qualification/Qualification';
import './Education.css';

const Education = (props) => {
    return (
        <div className="education col-md-12 mt-3">
            <div className="row ml-1 pt-3">
                <img src={Home} style={{ width: '30px', height: '30px' }} alt="Not available" />&nbsp;
                <Heading heading="Education" />
            </div>
            <div className="education-details">
                <Qualification
                    subject="Bachelor Of Technology, Computer Science"
                    school="Guru Nanak Dev University"
                    passoutYear="2013-2017"
                    marks="7.98"
                    isCgpa
                />
                <Qualification
                    subject="12th"
                    school="Lala Jagat Narain Dav Model School"
                    board="CBSE"
                    passoutYear="2012-2013"
                    marks="81.4"
                    isSchool
                />
                <Qualification
                    subject="10th"
                    school="Lala Jagat Narain Dav Model School"
                    board="CBSE"
                    passoutYear="2010-2011"
                    marks="9.2"
                    isSchool
                    isCgpa
                />
            </div>
        </div>
    );
};

export default Education;
