import React from 'react';
import Day from './views/components/Day';
import Month from './views/components/Month';
import Week from "./views/components/Week";
import calendar from './constants/calendar.json';

const App = () => {
  return (
    <div className="">
      {
        calendar.months.map((month: any, indexMonth: number) => {
          return <Month name={month.name} background_color={month.background_color} key={indexMonth}>
            {
              month.weeks.map((week: any, indexWeek: number) => {
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
        })
      }

    </div>
  );
};

export default App;
