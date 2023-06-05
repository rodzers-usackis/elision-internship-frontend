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

const colors = [
    {
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)'
    },
    {
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgb(255, 159, 64)'
    },
    {
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        borderColor: 'rgb(255, 205, 86)'
    },
    {
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)'
    },
    {
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)'
    },
    {
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgb(153, 102, 255)'
    },
    {
        backgroundColor: 'rgba(201, 203, 207, 0.2)',
        borderColor: 'rgb(201, 203, 207)'
    },
    {
        backgroundColor: 'rgba(97,239,64,0.2)',
        borderColor: 'rgb(109,255,99)'
    }
]

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

    const chartData2 ={
        labels: timestamps?.map((timestamp) => dayjs(timestamp).format('YYYY-MM-DD')),
        datasets: data?.data.map((item, index) => {
            return {
                label: item.retailerCompanyDto.name,
                data: item.timestampAmounts.map((item) => item.amount),
                borderColor: colors[index].borderColor,
                tension: 0.1,
                backgroundColor: colors[index].backgroundColor,
            }
        })
    }



    console.log(data)
    return <Line options={options} data={chartData2}/>
}
