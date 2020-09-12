import React, {useState, useEffect} from 'react'

import getDaysInMonth from './ownFunctions/GetDaysInMonth'
import getFirstDayOfMonth from './ownFunctions/GetFirstDayOfMonth'

// components import
import Month from './elements/Month'
import WeekDays from './elements/WeekDays'
import Days from './elements/Days'

function Calendar() {
    const MONTHS = [
    'January', 'February', 'March', 'April', 
    'May', 'june', 'July', 'August', 'September', 
    'October', 'November', 'December'];

    const today = new Date(); //current date obj

    const [date,setDate] = useState(today); //current date 
    const [day,setDay] = useState(date.getDate());
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());
    const [daysInMonth, setdaysInMonth] = useState(getDaysInMonth(year, month));
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(getFirstDayOfMonth(year, month))
    
    
    console.log(firstDayOfMonth)

    useEffect(()=>{
        setDay(date.getDate());
        setMonth(date.getMonth());
        setYear(date.getFullYear());
        setdaysInMonth(getDaysInMonth(year, month));
        setFirstDayOfMonth(getFirstDayOfMonth(year, month));
    },[date])
    
    // console.log(daysInMonth)
    return(
        
        <div className="calendar">
            <Month month={month} date={date.toDateString()}/>
            <WeekDays/>
            <Days daysInMonth={daysInMonth} firstDayOfMonth={firstDayOfMonth}/>
        </div>
    )
}

export default Calendar;