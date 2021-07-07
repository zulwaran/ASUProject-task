import React from 'react'
import Modal from "../Modal/Modal"
import { useEffect, useState } from "react"
import { FaTimes, FaUser, FaPen } from 'react-icons/fa'


const updateUser = (id) => {
    console.log('update', id)
}

const BodyTable = () => {
    const [modalActive, setModalActive] = useState(false)
    const [persons, setPersons] = useState([])

    useEffect(() => {
        const getPersons = async () => {
            const persons = await fetchPersons()
            setPersons(persons)
        }
        getPersons()
    }, [])

    //Get persons list
    const fetchPersons = async () => {
        const res = await fetch('http://localhost:5000/persons')
        const data = await res.json()
        return data
    }

    //Deleted person
    const deletePerson = async (id) => {
        await fetch(`http://localhost:5000/persons/${id}`, {
            method: 'DELETE',
        })
        setPersons(persons.filter((person) => person.id !== id))
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
                <p>Редактировать пользователя</p>
            </Modal>
        </>
    )
}

export default BodyTable
