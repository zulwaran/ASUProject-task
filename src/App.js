import HeaderTable from "./components/HeaderTable"
import BodyTable from "./components/BodyTable"
import AddButton from "./components/AddButton"

const App = () => {
    return (
        <div className='container'>
            <div className='user-list'>
                <table className='user-list__table' cellSpacing="0">
                    <HeaderTable />
                    <BodyTable />
                </table>
                <AddButton />
            </div>
        </div>

    )
}
export default App