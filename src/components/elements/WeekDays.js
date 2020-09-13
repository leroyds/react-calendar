import React from 'react'

function WeekDays(){

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
    let weekDaysDisplay =[]
    weekDays.forEach((day) => weekDaysDisplay.push(<div>{day}</div>))

    return(
        <div className="week-days">
            {weekDaysDisplay}
        </div>
    )
}

export default WeekDays