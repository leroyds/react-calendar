import React from 'react'

function Days({days=30}){

    let daysItem = []
    for(let i =1; i<= days; i++){
        daysItem.push(
        <div>{i}</div>
        )
    }

    return(
        <div className="days">
           {daysItem}
        </div>
    )
}

export default Days