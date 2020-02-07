import React, {Component} from 'react';
import Day from './views/components/Day';
import Month from './views/components/Month';
import Week from "./views/components/Week";
import calendar from './constants/calendar.json';

class App extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0
    }

    this.clickArrow = this.clickArrow.bind(this);
  }

  clickArrow(step: number) {
    if((this.state.counter === 11 && step > 0) || (this.state.counter === 0 && step < 0)) {
      return;
    }
    this.setState({
      counter: this.state.counter + step
    })
  }

  render(): any {
    let currentMonth: any = calendar.months[this.state.counter];
    const styles = {
      backgroundColor: currentMonth.background_color ? currentMonth.background_color : 'gray'
    };
    return (
        <div>
              <div className="Month_name" style={styles}>
                <div className="Month_arrows">
                  <span className="arrow" onClick={() =>{this.clickArrow(-1)}}>&lt;</span>
                </div>
                <div className="Month_name_div">
                  <strong>{currentMonth.name}</strong>
                  <span className="Month_name_year">2020</span>
                </div>
                <div className="Month_arrows">
                  <span className="arrow" onClick={() =>{this.clickArrow(1)}}>&gt;</span>
                </div>
              </div>

              <Month name={currentMonth.name} background_color={currentMonth.background_color} >
              {
                currentMonth.weeks.map((week: any, indexWeek: number) => {
                  return <Week num={week.week_num} key={indexWeek}>
                    {
                      week.days.map((day: any, indexDay: number) => {
                        return <Day num={day.day_num}
                                    activities={day.activities}
                                    background_color={day.background_color}
                                    is_other_month={day.is_other_month}
                                    key={indexDay}
                        />
                      })
                    }
                  </Week>
                })
              }
              </Month>
        </div>
    );
  }
}

export default App;
