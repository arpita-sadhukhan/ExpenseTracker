import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

const Expenses = props => {
    return (
        <div className="expenses">
            <ExpenseItem title={props.expenses[0].title}
                         amount={props.expenses[0].amount}
                         expenseDate={props.expenses[0].expenseDate}></ExpenseItem>
            <ExpenseItem title={props.expenses[1].title}
                         amount={props.expenses[1].amount}
                         expenseDate={props.expenses[1].expenseDate}></ExpenseItem>
            <ExpenseItem title={props.expenses[2].title}
                         amount={props.expenses[2].amount}
                         expenseDate={props.expenses[2].expenseDate}></ExpenseItem>
        </div>
    )
}
export default Expenses