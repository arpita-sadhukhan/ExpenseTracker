import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import {useState} from 'react'

function App() {

    const [expenses, setExpenses] = useState([])
    const populateExpenseData = (expenseData) => {
        setExpenses(prevExpenses => {
            return [expenseData, ...prevExpenses]
        })
    }
    return (
        <div>
            <NewExpense getExpenseData={populateExpenseData}/>
            <Expenses expenses={expenses}/>

        </div>
    );
}

export default App;
