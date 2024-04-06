import './countries.css';
// ignore this error since the package does not have types
import AfricaMap from 'react-africa-map';
import { Chart } from 'react-google-charts';

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
    return (
        <div className="countries-wrapper" id='country_distribution'>
            <div className="title">
                Distribution by Country
            </div>

            <div className="countries-graphs-wrapper">
                <AfricaMap selectColor="green"
                    selected={['MA', 'AO', 'ET', 'SO', 'EG']}
                    selection={true}
                    animeTime={1000}
                />

                <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"100%"}
                />
            </div>
        </div>
    );
}