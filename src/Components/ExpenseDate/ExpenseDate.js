import './ExpenseDate.css'
import Card from "../Card";

const ExpenseDate = props => {
    const day = props.expenseDate.toLocaleString('en-GB', {day: '2-digit'})
    const month = props.expenseDate.toLocaleString('en-GB', {month: 'long'})
    const year = props.expenseDate.getFullYear()

    return (
        <Card className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </Card>
    )
}
export default ExpenseDate