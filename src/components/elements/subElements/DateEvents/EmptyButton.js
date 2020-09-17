import React from 'react' 

const EmptyButton = ({firstDayOfMonth}) => {

    let emptyDaysDisplay = []
    for(let i=0;i<firstDayOfMonth;i++){
        emptyDaysDisplay.push(<div key={i} className="day-empty"></div>)
    }
    return(
        
        <>
            {emptyDaysDisplay}
        </>
    )
}

export default EmptyButton