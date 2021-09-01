import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import {useState} from 'react'

const INITIAL_DATA = [
    {
        id: 1,
        title: "Some Installment",
        amount: 15000,
        expenseDate: new Date(2021, 2, 28)
    }
];
function App() {

    const [expenses, setExpenses] = useState(INITIAL_DATA)
    const populateExpenseData = (expenseData) => {
        setExpenses(prevExpenses => {
            return [expenseData, ...prevExpenses]
        })
        console.log(expenses)
    }
    return (
        <div>
            <NewExpense getExpenseData={populateExpenseData}/>
            <Expenses expenses={expenses}></Expenses>
        </div>
    );
}

export default App;
