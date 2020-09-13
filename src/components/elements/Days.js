import React from 'react'

import DateButton from './subElements/DateEvents/DateButton'
import EmptyButton from './subElements/DateEvents/EmptyButton'


function Days({daysInMonth, firstDayOfMonth}){

    let daysItem = [] //stores calendar date blocks i.e date and empty blocks
    const totalLoop = daysInMonth + firstDayOfMonth; //loop count to get the no of days of the month including the empty space at the start
    const counterHelp = firstDayOfMonth - 1 //minuses the empty space count from from the loop count to get the date

    for(let i = 0; i < totalLoop ; i++){
        
        if(i < firstDayOfMonth){
            daysItem.push(<EmptyButton loopkey={i}/>)
        } 
        else{
            daysItem.push(<DateButton loopKey={i} counterHelp={counterHelp}/>)
        }
    }

    return(
        <div className="days">
           {daysItem}
        </div>
    )
}

export default Days