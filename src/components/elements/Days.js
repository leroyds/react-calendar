import React, {useState} from 'react'

import EmptyButton from './subElements/DateEvents/EmptyButton'
import DateBtn from './subElements/DateEvents/DateBtn'


//returns all the days in the month
function Days({daysInMonth, firstDayOfMonth, date, dayData}){

    let daysItem = [] //stores calendar date blocks i.e date and empty blocks
    const totalLoop = daysInMonth + firstDayOfMonth; //loop count to get the no of days of the month including the empty space at the start
    const counterHelp = firstDayOfMonth - 1 //minuses the empty space count from from the loop count to get the date

    return(
        <div className="days">
           <EmptyButton firstDayOfMonth={firstDayOfMonth}/> 
           <DateBtn dayData={dayData}/>
        </div>
    )
}

export default Days