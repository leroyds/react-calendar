import React from 'react'

import DateButton from './subElements/DateEvents/DateButton'
import EmptyButton from './subElements/DateEvents/EmptyButton'

//returns all the days in the month
function Days({daysInMonth, firstDayOfMonth, date}){

    let daysItem = [] //stores calendar date blocks i.e date and empty blocks
    const totalLoop = daysInMonth + firstDayOfMonth; //loop count to get the no of days of the month including the empty space at the start
    const counterHelp = firstDayOfMonth - 1 //minuses the empty space count from from the loop count to get the date

    for(let i = 0; i < totalLoop ; i++){
        
        if(i < firstDayOfMonth){
            daysItem.push(<EmptyButton loopkey={i}/>)//adds empty spaces before the start day of the month
        } 
        else{
            daysItem.push(<DateButton loopKey={i} counterHelp={counterHelp} date={date}/>)//adds date blocks depending on the no. of days in the month
        }
    }

    return(
        <div className="days">
           {daysItem}
        </div>
    )
}

export default Days