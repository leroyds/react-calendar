// Fills each day of the current month with relevant data i.e date, event

import data from '../../data'
import GetDaysInMonth from './GetDaysInMonth'

const dayDataCalculation = (date) => {

    const days = GetDaysInMonth(date)
    const month = String(date.getMonth() + 1).padStart(2,'0')
    const year =date.getFullYear()
    let daysDataMonth=[]
    const events = data

    for (let i=1; i<=days; i++){
        const date = String(i).padStart(2,'0')
        const id = `${year}-${month}-${date}`

        const event = events.filter(event => event.date===id)[0]

        let days = {
            id:id,
            class:event?'event':'',
            event: event?event:'',
            date:date,
        }
        
        daysDataMonth=[...daysDataMonth ,days]
    }
    return daysDataMonth
}

export default dayDataCalculation