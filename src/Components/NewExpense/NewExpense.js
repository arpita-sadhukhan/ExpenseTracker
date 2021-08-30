import './NewExpense.css'
import ExpenseForm from "../ExpenseForm/ExpenseForm";


const NewExpense = (prop) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        //console.log(expenseData)
        prop.getExpenseData(expenseData)
    }
    return (
        <div className={"new-expense"}>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}
export default NewExpense