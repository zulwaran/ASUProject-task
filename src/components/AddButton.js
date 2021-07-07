import React from 'react'
import Modal from "../Modal/Modal"
import { useState } from "react"

const AddButton = ({ persons, setPersons }) => {
    const [modalActive, setModalActive] = useState(false)
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')

    const addPerson = async (e) => {
        e.preventDefault()
        if (!firstName || !lastName) {
            return
        }
        const person = {
            firstName: firstName,
            lastName: lastName,
        }
        await fetch(`http://localhost:5000/persons/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(person),
        })
        setfirstName('')
        setlastName('')
        setPersons(persons = [...persons, person])

    }
    return (
        <div>
            <button className='user-list__add-btn' onClick={() => setModalActive(true)}>
                Добавить сотрудника
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className='modal__header'>Создание сотрудника</div>
                <button
                    className='modal__back-link'
                    onClick={() => setModalActive(false)}>
                    Назад к списку
                </button>
                <form className='modal__form' onSubmit={addPerson}>
                    <input
                        className='modal__input'
                        type='text'
                        placeholder='Введите имя сотрудника'
                        value={firstName}
                        onChange={(e) => setfirstName(e.target.value)} />
                    <input
                        className='modal__input'
                        type='text'
                        placeholder='Введите фамилию сотрудника'
                        value={lastName}
                        onChange={(e) => setlastName(e.target.value)} />
                    <input
                        type='submit'
                        value='Сохранить'
                        className='user-list__add-btn modal__btn' />
                </form>
            </Modal>
        </div >

    )
}

export default AddButton
