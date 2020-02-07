import React from "react";

export const returnEmoji = (type: string, index = 1) => {
    let emoji: any = null;


    switch (type) {
        case "santa cena":
            emoji = <i className="em em-bread" title="Santa cena" key={index}/>;
            break;
        case "consistorio":
            emoji = <i className="em em-briefcase" title="Consistorio" key={index}/>;
            break;
        case "diaconos":
            emoji = <i className="em em-toolbox" title="Diáconos" key={index}/>;
            break;
        case "cumple":
            emoji = <i className="em em-cake" title="Cumpleaños" key={index}/>;
            break;
        case "femenil":
            emoji = <i className="em em-female_curly_haired" title="Femenil" key={index}/>;
            break;
        case "varones":
            emoji = <i className="em em-man_in_tuxedo" title="Varones" key={index}/>;
            break;
        case "jovenes":
            emoji = <i className="em em-man-biking" title="Jóvenes" key={index}/>;
            break;
        case "ninos":
            emoji = <i className="em em-balloon" title="Niños" key={index}/>;
            break;
        case "evangelismo":
            emoji = <i className="em em-bookmark" title="Evangelismo" key={index}/>;
            break;
        case "recursos":
            emoji = <i className="em em-moneybag" title="Recursos" key={index}/>;
            break;
        case "relaciones":
            emoji = <i className="em em-handshake" title="Relaciones" key={index}/>;
            break;
        case "comunicaciones":
            emoji = <i className="em em-incoming_envelope" title="Comunicaciones" key={index}/>;
            break;
        case "educacion":
            emoji = <i className="em em-female-teacher" title="Educación" key={index}/>;
            break;
        case "alabanza":
            emoji = <i className="em em-musical_keyboard" title="Alabanza" key={index}/>;
            break;
        case "comision":
            emoji = <i className="em em-christmas_tree" title="Comisión navideña" key={index}/>;
            break;
        case "iglesia":
            emoji = <i className="em em-church" title="Comisión navideña" key={index}/>;
            break;
        default:
            emoji = null
    }

    return emoji;
};