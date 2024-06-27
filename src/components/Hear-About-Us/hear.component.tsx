import Chart from "react-google-charts";
import './hear.css';
import { useSelector } from "react-redux";

const options = {
    legend: "sources",
    pieSliceText: "label",
    pieHole: 0.5,
    backgroundColor: "transparent",
};


export const HeardAboutUs = () => {
    const data: String[][] = useSelector((state: any) => state.heardFrom.value.payload);

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
