import React from 'react'
import { useEffect, useState } from "react"
import { FaTimes, FaUser, FaPen } from 'react-icons/fa'

const deleteUser = (id) => {
    console.log('delete', id)
}

const updateUser = (id) => {
    console.log('update', id)
}

const BodyTable = () => {
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

    return (
        <>
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
                            onClick={() => updateUser(person.id)}
                        />
                    </td>
                    <td>
                        <FaTimes
                            style={{ color: 'red', cursor: 'pointer' }}
                            onClick={() => deleteUser(person.id)}
                        />
                    </td>
                </tr>
            ))}
        </>
    )
}

export default BodyTable
