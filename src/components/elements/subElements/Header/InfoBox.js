import React from 'react'

//returns the display info for the calendar header
const InfoBox = ({month, date}) => {

    const MONTHS = [
        'January', 'February', 'March', 'April', 
        'May', 'June', 'July', 'August', 'September', 
        'October', 'November', 'December'];
    month = MONTHS[month]

    return (
        <div>
            <h2>{month}</h2>
            <p>{date.toDateString()}</p>
        </div>
    )
}

export default InfoBox