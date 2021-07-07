import React from 'react'
import Modal from "../Modal/Modal"
import { useState } from "react"

const AddButton = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div>
            <button className='user-list__add-btn' onClick={() => setModalActive(true)}>
                Добавить сотрудника
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
                <p>Создать нового пользователя</p>
            </Modal>
        </div>

    )
}

export default AddButton
