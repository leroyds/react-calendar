import React from 'react'

// components import
import Month from './elements/Month'
import WeekDays from './elements/WeekDays'
import Days from './elements/Days'

function Calendar() {
    return(
        
        <div className="calendar">
            <Month/>
            <WeekDays/>
            <Days/>
        </div>
    )
}

export default Calendar;