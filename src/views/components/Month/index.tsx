import React from 'react';
import './index.css';

interface MonthPropsInterface {
    name: string,
    background_color?: string
}

const Month: React.FC<MonthPropsInterface> = (props) => {
    const styles = {
        backgroundColor: props.background_color ? props.background_color : 'white'
    };
    return <div className="Month" style={styles} key={props.name}>
        <div className="Month_name"><strong>{props.name}</strong></div>
        <div className="Month_arrows">
            <div className="arrow">&lt;</div>
            <div className="arrow">&gt;</div>
        </div>
        {
            props.children
        }
    </div>
};

export default Month;