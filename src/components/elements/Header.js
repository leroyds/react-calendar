import React from 'react'

// components
import PrevButton from './subElements/Header/PrevButton'
import NextButton from './subElements/Header/NextButton'
import InfoBox from './subElements/Header/InfoBox'

//Returns Calendar Header
function Month({month, date, setDate, events}) {
    
    return(
        <div className="month-info">
            <PrevButton setDate={setDate} date={date}/>
            <InfoBox month={month} date={date}/>
            <NextButton setDate={setDate} date={date}/>
        </div>
    )
}

export default Month