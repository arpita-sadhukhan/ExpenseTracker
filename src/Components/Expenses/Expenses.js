import ExpenseItem from "../ExpenseItem/ExpenseItem";
import './Expenses.css'
import Card from "../Card"
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import {useState} from 'react'

const Expenses = props => {

    const [year, setYear] = useState('')
    const captureYear = capturedData => {
        setYear(capturedData)
    }
    return (
        <div>

            <Card className="expenses">
                <ExpenseFilter onDateFilterSelect={captureYear}/>

                {props.expenses.map(expense => <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    expenseDate={expense.expenseDate}
                />)}
            </Card>
        </div>
    )
}
export default Expenses