import React from 'react';
import './style.css';

interface DayPropsInterface {
    num: number,
    activities?: any,
    background_color?: string,
    day_name?: string,
    is_other_month?: boolean
}

const Day: React.FC<DayPropsInterface> = (props) => {
    console.log("isother ",props.is_other_month);
    const styles = {
        backgroundColor: props.background_color ? props.background_color : 'white',
        color: props.is_other_month ? 'gray' : ''
    };

    const returnEmoji = (type: string) => {
        let emoji: any = null;
        switch (type) {
            case "consistorio":
                emoji = <i className="em em-toolbox" title="Diáconos"/>;
                break;
            case "diaconos":
                emoji = <i className="em em-toolbox" title="Diáconos"/>;
                break;
            case "cumple":
                emoji = <i className="em em-cake" title="Cumpleaños"/>;
                break;
            case "femenil":
                emoji = <i className="em em-female_curly_haired" title="Femenil"/>;
                break;
            case "varones":
                emoji = <i className="em em-female_curly_haired" title="Varones"/>;
                break;
            case "jovenes":
                emoji = <i className="em em-female_curly_haired" title="Jóvenes"/>;
                break;
            case "ninos":
                emoji = <i className="em em-female_curly_haired" title="Niños"/>;
                break;
            case "evangelismo":
                emoji = <i className="em em-book" title="Evangelismo"/>;
                break;
            case "recursos":
                emoji = <i className="em em-book" title="Recursos"/>;
                break;
            case "relaciones":
                emoji = <i className="em em-book" title="Relaciones"/>;
                break;
            case "comunicaciones":
                emoji = <i className="em em-book" title="Comunicaciones"/>;
                break;
            case "educacion":
                emoji = <i className="em em-book" title="Educación"/>;
                break;
            case "alabanza":
                emoji = <i className="em em-book" title="Alabanza"/>;
                break;
            case "comision":
                emoji = <i className="em em-book" title="Comisión navideña"/>;
                break;
            default:
                emoji = null
        }

        return emoji;
    };


    return <div className="Day" style={styles} key={props.num}>
            <div className="Day_number">
                <span className="Day_number_n">{props.num}</span><span className="Day_number_name">{props.day_name}</span>
            </div>
            <div className="Day_activities">
                {
                    props.activities ? props.activities.map((activitie: any, index: number) => {
                        return <div className="Day_activity" key={index}>
                            <span className="Day_activity--title">{activitie.title}</span>
                            <span className={`Day_activity--emoji ${activitie.colaborator}`}>
                                {
                                    returnEmoji(activitie.colaborator)
                                }
                            </span>
                        </div>
                    }): null
                }
            </div>
        </div>
};

export default Day;