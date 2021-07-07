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
                <div className='modal__header'>Создание сотрудника</div>
                <button className='modal__back-link' onClick={() => setModalActive(false)}>Назад к списку</button>
                <input className='modal__input' type='text' placeholder='Введите имя сотрудника'></input>
                <input className='modal__input' type='text' placeholder='Введите фамилию сотрудника'></input>
                <button className='user-list__add-btn modal__btn'>
                    Сохранить
                </button>
            </Modal>
        </div >

    )
}

export default AddButton
