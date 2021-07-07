import React from 'react'
import Modal from "../Modal/Modal"
import { useState } from "react"
import { FaTimes, FaUser, FaPen } from 'react-icons/fa'




const BodyTable = ({ persons, setPersons }) => {
    const [modalActive, setModalActive] = useState(false)

    //Deleted person
    const deletePerson = async (id) => {
        await fetch(`http://localhost:5000/persons/${id}`, {
            method: 'DELETE',
        })
        setPersons(persons.filter((person) => person.id !== id))
    }

    //Update person data
    const updateUser = (id) => {
        console.log('update', id)
    }

    return (
        <>
            <tbody>
                {persons.map((person) => (
                    <tr key={person.id}>
                        <td className="user-list__table-icon">
                            <FaUser
                                style={{ color: 'gray' }}
                            />
                        </td>
                        <td>
                            {person.firstName}
                        </td>
                        <td>
                            {person.lastName}
                        </td>
                        <td>
                            <FaPen
                                style={{ color: 'gray', cursor: 'pointer' }}
                                onClick={() => setModalActive(true)}
                            />
                        </td>
                        <td>
                            <FaTimes
                                style={{ color: 'red', cursor: 'pointer' }}
                                onClick={() => deletePerson(person.id)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className='modal__header'>Редактирование сотрудника</div>
                <button className='modal__back-link' onClick={() => setModalActive(false)}>Назад к списку</button>
                <input className='modal__input' type='text' placeholder='Введите имя сотрудника'></input>
                <input className='modal__input' type='text' placeholder='Введите фамилию сотрудника'></input>
                <button className='user-list__add-btn modal__btn'>
                    Сохранить
                </button>
            </Modal>
        </>
    )
}

export default BodyTable
