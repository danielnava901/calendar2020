import React, {Component} from 'react';
import {returnEmoji} from "../../../utilities/front";

interface ActiviyPropsInterface {
    data: any
}

class Activity extends Component<ActiviyPropsInterface, any> {

    constructor(props: ActiviyPropsInterface) {
        super(props);
        this.state = {
            show_activity: false
        }

        this.showDescription = this.showDescription.bind(this);
    }

    showDescription() {
        this.setState({
            show_description: !this.state.show_description
        })
    }


    render() {
        return <div className="Modalito-activity" onClick={this.showDescription} >
            <div className="Modalito-activity--hour">{this.props.data.start_at}</div>
            <div className="Modalito-activity--title">{this.props.data.title}</div>
            <div className="Modalito-activity--colaborators">
                {
                    this.props.data.colaborators.map((col: string, indexCol: number) => {
                        return <span key={indexCol}>
                                {returnEmoji(col)}
                                <span>{col[0].toUpperCase() + col.slice(1)}</span>
                            </span>
                    })
                }
            </div>
            {
                this.state.show_description &&
                <div className="Modalito-activity--description">
                    {
                        this.props.data.description || 'No hay descripción'
                    }
                </div>
            }
        </div>
    }

}
export default Activity;