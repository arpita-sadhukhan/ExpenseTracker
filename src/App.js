import Expenses from "./Components/Expenses";

function App() {

    const expenseProp = [
        {
            id: 1,
            title: "Some Installment",
            amount: 15000,
            expenseDate: new Date(2021, 2, 28)
        },
        {
            id: 2,
            title: "Mutual Fund",
            amount: 10000,
            expenseDate: new Date(2021, 2, 20)
        },
        {
            id: 3,
            title: "PPF",
            amount: 10000,
            expenseDate: new Date(2021, 2, 10)
        }
    ];
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses expenses={expenseProp}></Expenses>
        </div>
    );
}

export default App;
