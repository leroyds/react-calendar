import React from 'react'

function DateButton({loopKey, counterHelp}) {

    return <div key={loopKey} className="day">{loopKey-counterHelp}</div>
}

export default DateButton