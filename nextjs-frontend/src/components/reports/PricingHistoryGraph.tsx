import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import dayjs from "dayjs";
import {ProductPriceHistorian} from "../../model/product-price-historian/ProductPriceHistorian";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Pricing History', // Specify the title text here
            font: {
                size: 16, // Adjust the font size as needed
            },
            legend: {
                position: 'top' as const,
                display: false
            },
            layout: {
                padding: {
                    right: 0,
                },
            }
        }
    },
};


export function PricingHistoryGraph({data}: { data?: ProductPriceHistorian }) {
    const timestamps = data?.data[0].timestampAmounts.map((item) => item.timestamp);
    const amounts = data?.data[0].timestampAmounts.map((item) => item.amount);

    const chartData = {
        labels: timestamps?.map((timestamp) => dayjs(timestamp).format('YYYY-MM-DD')),
        datasets: [{
            label: data?.product.name,
            data: amounts,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            backgroundColor: 'rgba(53, 162, 235, 0.2)',
        }],
    };

    return <Line options={options} data={chartData}></Line>
}
