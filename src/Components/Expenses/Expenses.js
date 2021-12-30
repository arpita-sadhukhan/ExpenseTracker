import './Expenses.css'
import Card from "../Card"
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import {useState} from 'react'
import ExpenseList from "../ExpenseList/ExpenseList";
import ExpenseChart from "../EXpenseChart/ExpenseChart";

const Expenses = props => {

    const currentYear = new Date().getFullYear.toString()
    const [year, setYear] = useState(currentYear)
    const captureYear = capturedData => {
        setYear(capturedData)
    }
    const filteredExpense = props.expenses.filter(expense => {
        return expense.expenseDate.getFullYear() == year
    })

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter selected={year}
                               onDateFilterSelect={captureYear}/>
                <ExpenseChart expenses={filteredExpense}/>
                <ExpenseList items={filteredExpense}/>
            </Card>
        </div>
    )
}
export default Expenses