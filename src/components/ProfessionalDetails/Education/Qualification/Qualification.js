import React from 'react';

const Qualification = (props) => {
    return (
        <div className="qualifications mt-2">
            <h6 className="subject">{props.subject}</h6>
            <div className="school">{props.school}</div>
            {props.isSchool && <div className="board">Board: {props.board}</div>}
            <div className="passout-year"> Year: {props.year}</div>
            <div className="marks">
                {
                    props.isCgpa ? <span>Cgpa: </span> : <span>Percentage: </span>
                }
                {props.marks}</div><hr />
        </div>
    );
};

export default Qualification;
