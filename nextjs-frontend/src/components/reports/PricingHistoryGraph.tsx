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
import {width} from "@mui/system";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export interface ProductPriceData {
    timestamp: Date;
    productName: string;
    price: number;
}

const minPrice = 799;
const maxPrice = 899;
const dataPoints = 100;

const generateRandomPrice = (dataPoints: number): ProductPriceData[] => {
    const data: ProductPriceData[] = [];
    const startDate = new Date(2023, 1, 1, 0, 0, 0);

    for (let i = 0; i < dataPoints; i++) {
        const timestamp = new Date(startDate.getTime() + (i * 8 * 60 * 60 * 1000));
        const price = Math.random() * (maxPrice - minPrice) + minPrice;
        const roundedPrice = Math.round(price * 100) / 100;

        const dataPoint: ProductPriceData = {
            timestamp: timestamp,
            productName: 'Apple Iphone 13',
            price: roundedPrice
        };

        data.push(dataPoint);
    }

    return data;
}


const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
            display: false
        },
        layout: {
            padding: {
                right: 0,
            },
        }
    },
};

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September' , 'October', 'November', 'December'],
    datasets: [{
        label: generateRandomPrice(dataPoints)[0].productName,
        data: generateRandomPrice(dataPoints).map((dataPoint) => dataPoint.price),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
    }],
};

console.log(data)

export function PricingHistoryGraph() {
    return <Line options={options} data={data}></Line>
}