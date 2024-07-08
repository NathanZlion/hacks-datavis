import Chart from "react-google-charts";
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
        <div className="lg:min-h-[calc(100vh-150px)] h-fit p-2 md:p-10 md:px-40 flex justify-start flex-col w-full overflow-hidden gap-3 ">
            <div className="text-4xl">
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
