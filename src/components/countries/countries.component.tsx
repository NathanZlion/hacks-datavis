import './countries.css';
// ignore this error since the package does not have types
// @ts-ignore
import AfricaMap from 'react-africa-map';
import { Chart } from 'react-google-charts';
import { BarChart } from '../barchart/barchart.component';
import { useSelector } from 'react-redux';

// read the documentation
// https://www.npmjs.com/package/react-africa-map 

export const data = [
    ["Country", "Participants"],
    ["South Africa", 13],
    ["Somalia", 8],
    ["Ethiopia", 1.4],
    ["Djbouti", 2.3],
    ["Algeria", 11],
];

export const options = {
    legend: "none",
    pieSliceText: "label",
    pieHole: 0.5,
    backgroundColor: "transparent",
};


export const Countries = () => {
    const data: String[][] = useSelector((state: any) => state.heardFrom.value.payload);

    return (
        <div className="countries-wrapper" id='country_distribution'>
            <div className="title">
                Distribution by Country
            </div>

            <div className="countries-graphs-wrapper">
                <AfricaMap selectColor="green"
                    selected={['MA', 'AO', 'ET', 'SO', 'EG']}
                    animeTime={1000}
                />
                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"100%"}
                />
                <div className="pie-bar-chart-wrapper">
                    <BarChart title='Number of People' />
                </div>
            </div>
        </div>
    );
}