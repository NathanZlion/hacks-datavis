import { useSelector } from "react-redux";
import { prevParticipationDataInterface } from "../../state/prevParticipation.slice";


export const PrevHackathonPartcipation = () => {
    const prevParticipationData: prevParticipationDataInterface = useSelector((state: any) => state.prevParticipation.value.payload);

    return (
        <div className="min-h-[calc(100vh-150px)] h-fit p-2 md:p-10 md:px-40 flex justify-start flex-col w-full overflow-hidden gap-3 ">
            <div className="text-4xl">
                Have you participated in A2SV or Other Hackathons?
            </div>
            <table className="m-auto w-[80%] text-accent-foreground">
                <tbody>
                    <tr>
                        <th rowSpan={2}> Individual  </th>
                        <th>  Yes </th>
                        <td> {prevParticipationData.individualYes} </td>
                    </tr>

                    <tr>
                        <th>  No </th>
                        <td> {prevParticipationData.individualNo} </td>
                    </tr>

                    <tr>
                        <th rowSpan={2}> Team Lead </th>
                        <th> Yes </th>
                        <td> {prevParticipationData.groupYes} </td>
                    </tr>

                    <tr>
                        <th> No </th>
                        <td> {prevParticipationData.groupNo} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}