import './countries.css';
// ignore this error since the package does not have types
import { Chart } from 'react-google-charts';
import { BarChart } from '../barchart/barchart.component';
// import { BarChart } from '../ui/barchart';
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
    sliceVisibilityThreshold: 0.03, // 20%
    // make the label visible no matter what
    
};


export const Countries = () => {
    const countriesData: countryData = useSelector((state: any) => state.countries.value.payload);

    return (
        <div className="countries-wrapper" id='country_distribution'>
            <div className="title">
                Distribution By Country
            </div>

            <div>Individual Registration</div>
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


            {/* <div>Group Registration</div>
            <div className="countries-graphs-wrapper">
               <Chart
                    chartType="PieChart"
                    data={[
                        ["countries", "Number of Individual Participants"],
                        // @ts-ignore
                        ...Object.entries(countriesData).map(([key, value]) => [key, value.numberOfGroupParticipants])
                    ]}
                    options={options}
                    width={"100%"}
                    height={"100%"}
                />
                <BarChart title='Number of Group Participants'  individual={false} />
            </div> */}
        </div>
    );
}