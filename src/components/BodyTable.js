import React from 'react'
import Modal from "../Modal/Modal"
import { useState } from "react"
import { FaTimes, FaUser, FaPen } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const BodyTable = ({ persons, setPersons }) => {
    const [modalActive, setModalActive] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [id, setPersonId] = useState()
    const notify = ((status) => {
        console.log("status=", status)
        switch (status) {
            case status = 201:
                toast.success("Пользователь добавлен", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                break;
            case status = 200:
                toast.success("Успешное выполнение запроса", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                break;
            case status = 400:
                toast.error("Неверный запрос", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                break;
            case status = 404:
                toast.error("Сущность не найдена в системе", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                break;
            case status = 500:
                toast.error("Серверная ошибка", {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                break;
            default:
                break;
        }
    });

    //Deleted person
    const deletePerson = async (id) => {
        const res = await fetch(`http://localhost:5000/persons/${id}`, {
            method: 'DELETE',
        })
        setPersons(persons.filter((person) => person.id !== id))
        notify(res.status)
    }

    //Update person data
    const updatePerson = async (e) => {
        e.preventDefault()
        if (!firstName || !lastName) {
            return
        }
        const person = {
            firstName: firstName,
            lastName: lastName,
        }
        const res = await fetch(`http://localhost:5000/persons/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(person),
        })
        fetchPersons()
        notify(res.status)
    }


    const fetchPersons = async () => {
        const res = await fetch('http://localhost:5000/persons')
        const data = await res.json()
        const persons = await data
        setPersons(persons)
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
                                onClick={() => {
                                    setFirstName(person.firstName)
                                    setLastName(person.lastName)
                                    setPersonId(person.id)
                                    setModalActive(true)
                                }}
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
                <button
                    className='modal__back-link'
                    onClick={() => setModalActive(false)}>
                    Назад к списку
                </button>
                <form className='modal__form' onSubmit={updatePerson}>
                    <input
                        className='modal__input'
                        type='text'
                        placeholder='Введите имя сотрудника'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <input
                        className='modal__input'
                        type='text'
                        placeholder='Введите фамилию сотрудника'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
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
        </>
    )
}

export default BodyTable
