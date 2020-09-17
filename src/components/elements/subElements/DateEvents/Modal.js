import React from 'react'

const Modal = ({modalActive,modalText,setModalActive,modalDate}) => {

    const closeModal = () =>{
        setModalActive('')
    }

    return (
        <div className={`modal-bg ${modalActive}`} onClick={closeModal}>
            <div className="modal-cancel">*</div>
            <div className="modal-date">{modalDate}</div>
            {modalText}
        </div>
    )
}

export default Modal
