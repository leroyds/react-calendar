import React from 'react'

// returns individual date block 

function DateButton({loopKey, counterHelp, date}) {

    const DATE = loopKey-counterHelp;
    const ID = `${date.getFullYear()}-${date.getMonth()+1}-${DATE}`

    return <div key={ID} id={ID} className="day">{DATE}</div>
}

export default DateButton