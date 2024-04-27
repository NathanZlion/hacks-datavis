/// this is a file for a custom horizontal barchart to display data in a stunning visuals

import Chart from "react-google-charts"
import './barchart.css';

const INNERHEIGHT = 50; //pixels

interface props {
    title: string
}

export const BarChart = ({ title }: props) => {
    const data = [
        [title, "Number of Participants"],
        ["South Africa", 46],
        ["Somalia", 18],
        ["Ethiopia", 23],
        ["Djibouti", 12],
        ["Somalia", 18],
        ["Ethiopia", 23],
        ["Djibouti", 12],
        ["Somalia", 18],
        ["Ethiopia", 23],
        ["Djibouti", 12],
        ["Somalia", 18],
        ["Ethiopia", 23],
        ["Djibouti", 12],
        ["Somalia", 18],
        ["Ethiopia", 23],
        ["Djibouti", 12],
        ["Algeria", 38],
    ];  
    var chartAreaHeight = (data.length - 1) * INNERHEIGHT;
    
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
      height: chartAreaHeight,
      legend: { position: "none" },
      backgroundColor: "transparent",
    };

    return (
        <div className="chart-wrapper">
            < Chart
                // graph_id="#detailedCharts"
                className ="barchart"
                chartType="BarChart"
                width="100%"
                data={data}
                options={options}
            />
        </div>
    );
}
