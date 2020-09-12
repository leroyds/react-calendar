import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Month({month, date}) {
    const MONTHS = [
        'January', 'February', 'March', 'April', 
        'May', 'june', 'July', 'August', 'September', 
        'October', 'November', 'December'];
    month = MONTHS[month]
    
    return(
        
        <div className="month-info">
            <div className="prev-btn">
                prev
            </div>

            <div>
                <h2>{month}</h2>
                <p>{date}</p>
            </div>

            <div>
                <span className="next-btn">Next</span>
            </div>
        </div>
    )
}

export default Month