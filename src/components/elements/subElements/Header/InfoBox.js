import React from 'react'

const InfoBox = ({month, date}) => {

    const MONTHS = [
        'January', 'February', 'March', 'April', 
        'May', 'june', 'July', 'August', 'September', 
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