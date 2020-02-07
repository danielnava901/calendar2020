import React from 'react';
import './style.css';
import Activity from "../Activity";

interface ModalitoPropsInterface {
    onClose: () => void,
    currentDay: any
}

const Modalito: React.FC<ModalitoPropsInterface> = (props: ModalitoPropsInterface) => {

    console.log(props.currentDay);

    return <div className="Modalito">
    <div className="Modalito_container">
        <div className="Modalito_close" onClick={props.onClose}>&times;</div>
        <div className="Modalito_body">
            <div className="Modalito_body--header">
                <div className="Modalito_body--day">
                    <span className="Modalito_body--day-name">{props.currentDay.day_name}</span>
                    <strong className="Modalito_body--day-num">{props.currentDay.day?.day_num}</strong>
                </div>
            </div>
            <div className="Modalito_body--bag">
                {
                    props.currentDay.day?.activities?.map((activity: any, index: number) => {
                        return <Activity data={activity} key={index} />
                    })
                }
            </div>
        </div>
    </div>
    </div>

}
export default Modalito;