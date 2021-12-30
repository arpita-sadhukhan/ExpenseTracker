import './ExpenseForm.css'
import {useState} from 'react'
import Expenses from "../Expenses/Expenses";

const ExpenseForm = (prop) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    let addedExpense = false

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        console.log()
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        const expenseData = {
            title : enteredTitle,
            amount : +enteredAmount,
            expenseDate : new Date(enteredDate)
        }
        prop.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        addedExpense = true
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={"new-expense__controls"}>
                <div className={"new-expense__control"}>
                    <label>Title</label>
                    <input type='text' value = {enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label>Amount</label>
                    <input type='number' min={'0.01'} step={'0.01'}
                           value = {enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label>Date</label>
                    <input type='date' min={"2019-01-01"} max={"2022-12-31"} value = {enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <button type={"button"} onClick={prop.onCancel}>Cancel</button>
            <button type={"submit"}>Add Expense</button>
            {addedExpense && <Expenses onDateFilterSelect={enteredDate.getFullYear.toString()}/>}
        </form>
    )
}
export default ExpenseForm