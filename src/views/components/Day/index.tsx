import React from 'react';
import './style.css';

import {returnEmoji} from "../../../utilities/front";

interface DayPropsInterface {
    num: number,
    data: any,
    activities?: any,
    background_color?: string,
    day_name?: string,
    is_other_month?: boolean,
    onClick: () => void
}

const Day: React.FC<DayPropsInterface> = (props) => {

    const styles = {
        backgroundColor: props.background_color ? props.background_color : ''
    };



    const onClick = () => {
        props.onClick();
    };

    return <div key={props.num}
                className={`Day ${props.is_other_month ? 'other-day': ''}`}
                style={styles}
                onClick={onClick}
    >
        <div className="Day_number">
            <span className={`Day_number_n`}>{props.num}</span>
            <span className="Day_number_name">{props.day_name}</span>
        </div>
        <div className="Day_activities">
            {
                props.activities ? props.activities.map((activity: any, index: number) => {

                    return <div className="Day_activity" key={index}>
                        <span className="Day_activity--title">{activity.title}</span>
                            {
                                activity.colaborators?.map((col: string, indexCol:number) => {

                                    return <span className={`Day_activity--emoji ${col}`} key={indexCol}>
                                        {
                                            returnEmoji(col)
                                        }
                                    </span>
                                })
                            }

                    </div>
                }): null
            }
        </div>
    </div>
};

export default Day;