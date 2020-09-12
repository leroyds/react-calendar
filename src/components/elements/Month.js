import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Month(props) {
    
    return(
        
        <div className="month-info">
            <div className="prev-btn">
                prev
            </div>

            <div>
            <h2>{props.month}</h2>
                <p>{props.date}</p>
            </div>

            <div>
                <span className="next-btn">Next</span>
            </div>
        </div>
    )
}

export default Month