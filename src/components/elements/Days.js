import React from 'react'



function Days({daysInMonth, firstDayOfMonth}){

    let daysItem = []
    const totalLoop = daysInMonth + firstDayOfMonth;
    const counterHelp = firstDayOfMonth -1

    for(let i = 0; i < totalLoop ; i++){
        
        if(i < firstDayOfMonth){
            daysItem.push(
                <div key={i}></div>
            )
        } 

        else{
            
            daysItem.push(
            <div key={i}>{i-counterHelp}</div>
            )
        }
    }

    return(
        <div className="days">
           {daysItem}
        </div>
    )
}

export default Days