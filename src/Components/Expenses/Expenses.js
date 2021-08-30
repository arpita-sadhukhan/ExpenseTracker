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
                <ExpenseItem title={props.expenses[0].title}
                             amount={props.expenses[0].amount}
                             expenseDate={props.expenses[0].expenseDate}></ExpenseItem>
                <ExpenseItem title={props.expenses[1].title}
                             amount={props.expenses[1].amount}
                             expenseDate={props.expenses[1].expenseDate}></ExpenseItem>
                <ExpenseItem title={props.expenses[2].title}
                             amount={props.expenses[2].amount}
                             expenseDate={props.expenses[2].expenseDate}></ExpenseItem>
            </Card>
        </div>
    )
}
export default Expenses