import { useSelector } from "react-redux";
import { prevParticipationDataInterface } from "../../state/prevParticipation.slice";
import { BarChart } from "@tremor/react";


export const PrevHackathonPartcipation = () => {
    const prevParticipationData: prevParticipationDataInterface = useSelector((state: any) => state.prevParticipation.value.payload);
    const chartData = [
        {
            name: 'Individuals',
            'Yes': prevParticipationData.individualYes,
            'No': prevParticipationData.individualNo
        },
        {
            name: 'Group Leads',
            'Yes': prevParticipationData.groupYes,
            'No': prevParticipationData.groupNo
        }
    ];

    const dataFormatter = (number: number) =>
        Intl.NumberFormat('us').format(number).toString();


    return (
        <div className="md:min-h-[calc(100vh-150px)] h-fit p-2 md:p-10 md:px-40 flex justify-start flex-col w-full overflow-hidden gap-3 ">
            <div className="text-4xl">
                Have you participated in A2SV or Other Hackathons?
            </div>

            <BarChart index="name" data={chartData} categories={['Yes', 'No']} colors={['blue', 'red']} 
                    valueFormatter={dataFormatter}
                    yAxisWidth={48}
                    className="w-full"
            />
        </div>
    );

}