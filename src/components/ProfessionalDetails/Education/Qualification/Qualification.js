import React from 'react';

const Qualification = (props) => {
    return (
        <div className="qualification col-md-12">
            <div className="subject">{props.subject}</div>
            <div className="school">{props.school}</div>
            {props.isSchool && <div className="board">Board: {props.board}</div>}
            <div className="passout-year">Passout Year: {props.passoutYear}</div>
            <div className="marks">
                {
                    props.isCgpa ? <span>Cgpa: </span> : <span>Percentage</span>
                }
                {props.marks}</div><hr />
        </div>
    );
};

export default Qualification;
