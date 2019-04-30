import React from 'react';
import Heading from '../../Heading/Heading';
import Home from '../../../Images/home.svg';
import './TechnicalSkills.css';

const TechnicalSkills = (props) => {
    return (
        <div className="technical-skills col-md-12 mt-3">
            <div className="row ml-1 pt-3">
                <img src={Home} style={{ width: '30px', height: '30px' }} alt="Not available" />&nbsp;
                <Heading heading="Technical Skills" />
            </div>
            <div className="skills ml-1 pt-3">
                <div className="frontend">
                    <span>
                        Front End :&nbsp;
                        <span>
                            ReactJs, AngularJs
                        </span>
                    </span><hr />
                </div>
                <div className="ui">
                    <span>
                        UI :&nbsp;
                        <span>
                            Html, Css, Bootstrap
                        </span>
                    </span><hr />
                </div>
                <div className="programming-language">
                    <span>
                        Programming Language :&nbsp;
                        <span>
                            C, C++, Javascript, PHP
                        </span>
                    </span><hr />
                </div>
                <div className="etl">
                    <span>
                        ETL :&nbsp;
                        <span>
                            Microsoft Business Intelligence SSIS, IBM Datastage
                        </span>
                    </span><hr />
                </div>
                <div className="reporting">
                    <span>
                        Reporting :&nbsp;
                        <span>
                            SSRS, PowerBI
                        </span>
                    </span><hr />
                </div>
                <div className="database">
                    <span>
                        Database :&nbsp;
                        <span>
                            Mysql, Oracle Sql, Sql Server
                        </span>
                    </span>
                </div><br />
            </div>
        </div>
    );
};

export default TechnicalSkills;