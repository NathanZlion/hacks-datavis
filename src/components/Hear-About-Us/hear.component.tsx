import Chart from "react-google-charts";

const data = [
    ["Language", "Speakers (in millions)"],
    ["Linkedin", 13],
    ["From a friend", 16],
    ["Facebook", 2.5],
    ["Twitter", 61],
    ["Tiktok", 34],
];

const options = {
    title: "Where did you hear about this hackathon?",
    legend: "none",
    pieSliceText: "label",
    // slices: {
    //     4: { offset: 0.2 },
    //    12: { offset: 0.3 },
    //    14: { offset: 0.4 },
    //    15: { offset: 0.5 },
    // },
    pieHole: 0.5,
};


export const HeardAboutUs = () => {

    return (
        <div className="hear-wrapper bg-red-300">
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
