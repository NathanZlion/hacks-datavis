import './countries.css';
// ignore this error since the package does not have types
import { Chart } from 'react-google-charts';
import { BarChart } from '../barchart/barchart.component';
import { useSelector } from 'react-redux';
import { countryData } from '../../state/countries.slice';


// read the documentation
// https://www.npmjs.com/package/react-africa-map 
export const data = [
    ["Country", "Participants"],
];

export const options = {
    legend: "none",
    pieSliceText: "label",
    pieHole: 0.5,
    backgroundColor: "transparent",
};


export const Countries = () => {
    const countriesData: countryData = useSelector((state: any) => state.countries.value.payload);

    return (
        <div className="countries-wrapper" id='country_distribution'>
            <div className="title">
                Distribution By Country
            </div>

            <div className="countries-graphs-wrapper">
               <Chart
                    chartType="PieChart"
                    data={[
                        ["countries", "Number of Individual Participants"],
                        // @ts-ignore
                        ...Object.entries(countriesData).map(([key, value]) => [key, value.numberOfIndividualParticipants])
                    ]}
                    options={options}
                    width={"100%"}
                    height={"100%"}
                />
                <BarChart title='Number of Individual Participants'  individual={true} />
            </div>
        </div>
    );
}