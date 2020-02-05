import React from 'react';
import './style.css';


interface WeekPropsInterface {
    num: number
}

const Week: React.FC<WeekPropsInterface> = (props) => {
    return <div className="Week" key={props.num}>
        {/*<div className="col-sm-2">{props.num}</div>*/}
        {
            props.children
        }
        {/*<div className="col-sm-1">&nbsp;</div>*/}
    </div>
};

export default Week;