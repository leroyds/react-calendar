import React,{useState}from 'react'
import data from '../../../../data';
import  daata from '../../../../data'
// returns individual date block 

function DateButton({loopKey, counterHelp, date, events}) {

    const DATE = loopKey-counterHelp;
    const ID = `${date.getFullYear()}-${date.getMonth()+1}-${DATE}`
    const[clas, setClas] = useState('')
    // let data = daata.filter((data)=> data.date === ID)
    // console.log(data.date)
    let cla = ''
    let eventName = ''
    daata.forEach((data)=>{
        if(data.date===ID){
            cla = 'event'
            eventName = data.event
        }
    })

    function eventPopup(){
        alert(eventName)
        console.log(eventName)
    }

return <div key={ID} id={ID} className={"day " + cla} onClick={eventPopup}>{DATE}</div>
}

export default DateButton