import React,{useState} from 'react'
import Modal from './Modal'

function DateBtn({dayData}) {

    console.log(dayData[24].event.event)
    let dates = []
    const [modalActive, setModalActive] = useState('')
    const [modalText, setModalText] = useState('')
    const [modalDate, setModalDate] = useState('')

    for (let i=0; i<dayData.length;i++){
        let eventClass = ''
        const eventName = dayData[i].event.event
        if(eventName){
            eventClass = dayData[i].class;
        }
        
        // on click functions
        const clickBtn = () => {
            setModalActive('modal-display')
            setModalText(eventName)
            setModalDate(dayData[i].id)
        }
        const nothing = () => {
            return 
        }

        const click = eventName? clickBtn: nothing;

        // date data execution
        dates.push(
            <div  
                className={`day ${eventClass}`} 
                onClick={click}>
                    {dayData[i].date}
            </div>)
    }

    return (
        <>
                {dates}
                <Modal modalActive={modalActive} setModalActive={setModalActive} modalText={modalText} modalDate={modalDate}/>
        </>
        )
            
}

export default DateBtn
