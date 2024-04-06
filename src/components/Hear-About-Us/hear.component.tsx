import Chart from "react-google-charts";
import './hear.css';

const data = [
    ["Language", "Speakers (in millions)"],
    ["Linkedin", 21],
    ["From a friend", 10],
    ["Facebook", 10.5],
    ["Twitter", 46],
    ["Tiktok", 30],
];

const options = {
    legend: "sources",
    pieSliceText: "label",
    // slices: {
    //     4: { offset: 0.2 },
    //    12: { offset: 0.3 },
    //    14: { offset: 0.4 },
    //    15: { offset: 0.5 },
    // },
    pieHole: 0.5,
    backgroundColor: "transparent",
    legendTextStyle: { color: '#FFF', fontSize: '100px'},
};


export const HeardAboutUs = () => {

    return (
        <div className="hear-wrapper">
            <div className="title">
                Where did you hear about us?
            </div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
}       
