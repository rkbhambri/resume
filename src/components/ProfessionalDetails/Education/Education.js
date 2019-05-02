import React from 'react';
import Heading from '../../Heading/Heading';
import EducationImg from '../../../Images/education.svg';
import Qualification from './Qualification/Qualification';
import './Education.css';

const Education = (props) => {
    return (
        <div className="education col-md-12 mt-3">
            <div className="row ml-1 pt-3">
                <img src={EducationImg} style={{ width: '30px', height: '30px' }} alt="Not available" />&nbsp;&nbsp;
                <Heading heading="Education" />
            </div>
            <div className="education-details mt-3">
                <Qualification
                    subject="Bachelor Of Technology, Computer Science"
                    school="Guru Nanak Dev University"
                    year="2013-2017"
                    marks="7.98"
                    isCgpa
                />
                <Qualification
                    subject="12th"
                    school="Lala Jagat Narain Dav Model School"
                    board="CBSE"
                    year="2012-2013"
                    marks="81.4"
                    isSchool
                />
                <Qualification
                    subject="10th"
                    school="Lala Jagat Narain Dav Model School"
                    board="CBSE"
                    year="2010-2011"
                    marks="9.2"
                    isSchool
                    isCgpa
                />
            </div>
        </div>
    );
};

export default Education;
