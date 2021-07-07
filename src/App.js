import HeaderTable from "./components/HeaderTable"
import BodyTable from "./components/BodyTable"
import AddButton from "./components/AddButton"
import { useEffect, useState } from "react"

const App = () => {
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
        <div className='container'>
            <div className='user-list'>
                <table className='user-list__table' cellSpacing="0">
                    <HeaderTable />
                    <BodyTable persons={persons} setPersons={setPersons} />
                </table>
                <AddButton persons={persons} setPersons={setPersons} />
            </div>
        </div>

    )
}
export default App