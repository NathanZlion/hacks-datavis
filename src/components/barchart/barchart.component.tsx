/// this is a file for a custom horizontal barchart to display data in a stunning visuals

import Chart from "react-google-charts"

export const data = [
    ["Country", "Number of Participants"],
    ["South Africa", 46],
    ["Somalia",  18],
    ["Ethiopia",  23],
    ["Djibouti",  12],
    ["Algeria",  38],
];

export const options = {
    hAxis: {
        minValue: 0,
    },
    vAxis: {
        title: "City",
    },
    bars: "horizontal",
    backgroundColor: "transparent",
    legend: "none"
};


export const BarChart = () => {
    return (
        < Chart
            chartType="Bar"
            data={data}
            options={options}
        />
    );
}