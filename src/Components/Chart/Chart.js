import ChartBar from "../ChartBar/ChartBar";
import './Chart.css'

const Chart = props => {
    const expenseValues = props.dataPoints.map(datapoint => datapoint.Value);
    const maxTotal = Math.max(...expenseValues);
    return (
        <div className='chart'>
            {props.dataPoints.map((datapoint) => (
                <ChartBar
                    key={datapoint.label}
                    value={datapoint.Value}
                    maxValue={maxTotal}
                    label={datapoint.label}/>
            ))}
        </div>
    )
};

export default Chart
