import React, {useState, useEffect} from 'react'

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
    const [month, setMonth] = useState(MONTHS[date.getMonth()]);

    useEffect(()=>{
        setDay(date.getDate());
        setMonth(MONTHS[date.getMonth()])
    },[date])
    
    
    return(
        
        <div className="calendar">
            <Month month={month} date={date.toDateString()}/>
            <WeekDays/>
            <Days/>
        </div>
    )
}

export default Calendar;