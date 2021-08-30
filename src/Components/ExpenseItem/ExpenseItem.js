import './ExpenseItem.css'
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card"
import { useState } from 'react'

const ExpenseItem = props => {

    const [title, setTitle] = useState(props.title)

    const clickEvent = () => {
        setTitle('Updated!')
        console.log(title)
    }
    return (
        <Card className="expense-item">
            <ExpenseDate expenseDate={props.expenseDate}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickEvent}>Click me</button>
        </Card>
        )
}
export default ExpenseItem