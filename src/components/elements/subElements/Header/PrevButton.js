// click function for the previous button on the calendar

import React from 'react'

const PrevButton = ( {setDate, date}) => {

    function prevClick(){
        setDate(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate()))
    }

    return (
        <div className="prev-btn" onClick={prevClick}>
            <span>Prev</span>
        </div>
    )
}

export default PrevButton