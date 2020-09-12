import React from 'react'

const NextButton = ( {setDate, date}) => {

    function nextClick(){
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, date.getDate()))
    }

    return (

        <div className="prev-btn" onClick={nextClick}>
            <span>Next</span>
        </div>
    )
    

}

export default NextButton