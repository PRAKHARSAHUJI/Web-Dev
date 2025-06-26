import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Income',
            data: [3000, 2500, 4000, 2000, 3000, 1500, 1000, 500, 675, 900, 1400, 1300],
            backgroundColor: '#213ebf',
        },
        {
            label: 'Expenses',
            data: [1200, 1900, 800, 200, 2000, 4500, 125, 2000, 300,1400, 100, 300],
            backgroundColor: '#FD5E53',
        },
    ],
};

function BarChart() {
    return <Bar data={barData} />;
}
export default BarChart;