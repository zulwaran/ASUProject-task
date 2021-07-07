import React from 'react'
import Modal from "../Modal/Modal"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddButton = ({ persons, setPersons }) => {
    const [modalActive, setModalActive] = useState(false)
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const notifyCreate = () => toast.success("Пользователь добавлен", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

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
        notifyCreate()

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
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
        </div >

    )
}

export default AddButton
