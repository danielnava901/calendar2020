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

    const styles = {
        backgroundColor: props.background_color ? props.background_color : 'transparent'
    };

    const returnEmoji = (type: string) => {
        let emoji: any = null;


        switch (type) {
            case "cena":
                emoji = <i className="em em-bread" title="Santa cena"/>;
                break;
            case "consistorio":
                emoji = <i className="em em-briefcase" title="Consistorio"/>;
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
                emoji = <i className="em em-man_in_tuxedo" title="Varones"/>;
                break;
            case "jovenes":
                emoji = <i className="em em-man-biking" title="Jóvenes"/>;
                break;
            case "ninos":
                emoji = <i className="em em-balloon" title="Niños"/>;
                break;
            case "evangelismo":
                emoji = <i className="em em-bookmark" title="Evangelismo"/>;
                break;
            case "recursos":
                emoji = <i className="em em-moneybag" title="Recursos"/>;
                break;
            case "relaciones":
                emoji = <i className="em em-handshake" title="Relaciones"/>;
                break;
            case "comunicaciones":
                emoji = <i className="em em-incoming_envelope" title="Comunicaciones"/>;
                break;
            case "educacion":
                emoji = <i className="em em-female-teacher" title="Educación"/>;
                break;
            case "alabanza":
                emoji = <i className="em em-musical_keyboard" title="Alabanza"/>;
                break;
            case "comision":
                emoji = <i className="em em-christmas_tree" title="Comisión navideña"/>;
                break;
            case "iglesia":
                emoji = <i className="em em-church" title="Comisión navideña"/>;
                break;
            default:
                emoji = null
        }

        return emoji;
    };

    return <div className={`Day ${props.is_other_month ? 'other-day': ''}`} style={styles} key={props.num}>
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