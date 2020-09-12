import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Month() {
    
    return(
        <div className="month-info">

            <div className="prev-btn">
                prev
            </div>

            <div>
                <h2>June</h2>
                <p>Sat June 01 2019</p>
            </div>

            <div>
                <span className="next-btn">Next</span>
            </div>
        </div>
    )
}

export default Month