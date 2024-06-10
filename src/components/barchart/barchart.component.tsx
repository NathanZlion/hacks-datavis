/// this is a file for a custom horizontal barchart to display data in a stunning visuals

import Chart from "react-google-charts"
import './barchart.css';
import { countryData } from "../../state/countries.slice";
import { useSelector } from "react-redux";

const INNERHEIGHT = 400; //pixels

interface props {
    title: string
    individual?: boolean
}

export const BarChart = ({ title, individual }: props) => {
    const countriesData: countryData = useSelector((state: any) => state.countries.value.payload);
    const countriesDataArray = Object.entries(countriesData).map(([key, value]) => ({ key, value }));
    var entriesLength = countriesData ? countriesDataArray.length - 1 : 5;
    
    var chartAreaHeight = entriesLength * INNERHEIGHT;
    
    const options = {
        title: title,
        legendTextStyle: { color: '#FFF' },
        titleTextStyle: { color: '#FFF' },

        hAxis: {
            textStyle: { color: '#FFF' },
            minValue: 0,
        },
        vAxis: {
            title: "Countries",
        },
        // Colors only the chart area, with opacity
        left: 10,
        top: 10,
        chartArea: {
            // width: '100%',
        },
        height: 500,
        legend: { position: "none" },
        backgroundColor: "transparent",
    };
    
    return (
        <div className="chart-wrapper">
            < Chart
                graph_id="#detailedCharts"
                className="barchart"
                chartType="BarChart"
                width="100%"
                data={[
                    ["Country", title],
                    // @ts-ignore
                    ...Object.entries(countriesData).map(([key, value]) => [key, individual ? value.numberOfIndividualParticipants : value.numberOfGroupParticipants])
                ]}
                options={options}
            />
        </div>
    );
}
