import React from 'react'
import { FaTimes, FaUser, FaPen } from 'react-icons/fa'

const users = [
    {
        id: 1,
        firstName: 'Михаил',
        lastName: 'Абрамов',
    },
    {
        id: 2,
        firstName: 'Елена',
        lastName: 'Солнцева',
    },
    {
        id: 3,
        firstName: 'Гриша',
        lastName: 'Поляков',
    }
]

const deleteUser = (id) => {
    console.log('delete', id)
}

const updateUser = (id) => {
    console.log('update', id)
}

const BodyTable = () => {
    return (
        <>
            {users.map((user) => (
                <tr key={user.id}>
                    <td className="user-list__table-icon">
                        <FaUser
                            style={{ color: 'gray' }}
                        />
                    </td>
                    <td>
                        {user.firstName}
                    </td>
                    <td>
                        {user.lastName}
                    </td>
                    <td>
                        <FaPen
                            style={{ color: 'gray', cursor: 'pointer' }}
                            onClick={() => updateUser(user.id)}
                        />
                    </td>
                    <td>
                        <FaTimes
                            style={{ color: 'red', cursor: 'pointer' }}
                            onClick={() => deleteUser(user.id)}
                        />
                    </td>
                </tr>
            ))}
        </>
    )
}

export default BodyTable
