import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, ChartDataset, ChartData,
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
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)'
    },
    {
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgb(255, 159, 64)'
    },
    {
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)'
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
        backgroundColor: 'rgba(97,239,64,0.2)',
        borderColor: 'rgb(109,255,99)'
    },
    {
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgb(153, 102, 255)'
    },
    {
        backgroundColor: 'rgba(201, 203, 207, 0.2)',
        borderColor: 'rgb(201, 203, 207)'
    }
]

export function PricingHistoryGraph({data}: { data?: ProductPriceHistorian }) {
    let timestamps: string[] = [];
    let chartData: ChartData<"line", (number | null)[], string> = {
        labels: [],
        datasets: [],
    };

    if (data) {
        // Collect all unique timestamps and round them to the day only
        const uniqueTimestampsSet = new Set<string>();
        data.data.forEach((item) => {
            item.timestampAmounts.forEach((timestampAmount) => {
                const roundedTimestamp = dayjs(timestampAmount.timestamp).startOf('day').format('YYYY-MM-DD');
                uniqueTimestampsSet.add(roundedTimestamp);
            });
        });

        // Convert the Set to an array and sort the timestamps in ascending order
        timestamps = Array.from(uniqueTimestampsSet).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

        // Prepare the chart data
        chartData.labels = timestamps;
        chartData.datasets = data.data.map((item, index) => {
            const dataset = {
                label: item.retailerCompanyDto.name,
                data: Array(timestamps.length).fill(null) as (number | null)[],
                borderColor: colors[index].borderColor,
                tension: 0.1,
                backgroundColor: colors[index].backgroundColor,
            };
            item.timestampAmounts.forEach((timestampAmount) => {
                const roundedTimestamp = dayjs(timestampAmount.timestamp).startOf('day').format('YYYY-MM-DD');
                const timestampIndex = timestamps.indexOf(roundedTimestamp);
                if (timestampIndex !== -1) {
                    dataset.data[timestampIndex] = timestampAmount.amount;
                }
            });
            return dataset;
        });
    }


    return <Line options={options} data={chartData}/>
}
