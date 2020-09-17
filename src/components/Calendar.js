import React, {useState, useEffect} from 'react'

import getDaysInMonth from './ownFunctions/GetDaysInMonth'
import getFirstDayOfMonth from './ownFunctions/GetFirstDayOfMonth'
import Fetch2019Events from './ownFunctions/Fetch2019Events'
import dayDataCalculation from './ownFunctions/dayDataCalculation'

// components import
import Header from './elements/Header'
import WeekDays from './elements/WeekDays'
import Days from './elements/Days'

function Calendar() {

    const today = new Date(); //current date obj

    const [date,setDate] = useState(today); //current date 
    const [day,setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [daysInMonth, setdaysInMonth] = useState(getDaysInMonth(date));
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(getFirstDayOfMonth(date));
    const [events, setEvents] = useState([Fetch2019Events(date)]);
    const [dayData, setDayData] = useState(dayDataCalculation(date));
    // console.log(dayData)

    useEffect(()=>{
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        setdaysInMonth(getDaysInMonth(date));
        setFirstDayOfMonth(getFirstDayOfMonth(date));
        setEvents(Fetch2019Events(date));
        setDayData(dayDataCalculation(date))
    },[date])
    
    // console.log(events)
    
    return( 
        <div className="calendar">
            <Header month={month} date={date} setDate={setDate} events={events}/>
            <WeekDays/>
            <Days daysInMonth={daysInMonth} firstDayOfMonth={firstDayOfMonth} date={date} dayData={dayData}/>
        </div>
    )
}

export default Calendar;