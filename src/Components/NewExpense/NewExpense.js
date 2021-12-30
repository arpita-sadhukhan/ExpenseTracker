import './NewExpense.css'
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import {useState} from "react";

const NewExpense = (prop) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        prop.getExpenseData(expenseData)
    }
    const isEditingHandler = () => {
        setIsEditing(true)
    }
    const stopEditingHandler = () => {
        setIsEditing(false)
    }
    return (
        <div className={"new-expense"}>
            {!isEditing ? <button onClick={isEditingHandler}>Add New Expense</button> :
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}
export default NewExpense