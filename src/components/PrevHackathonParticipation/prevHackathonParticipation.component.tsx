import { useSelector } from "react-redux";
import { prevParticipationDataInterface } from "../../state/prevParticipation.slice";
import "./prevHackathonParticipation.css";


export const PrevHackathonPartcipation = () => {
    const prevParticipationData: prevParticipationDataInterface = useSelector((state: any) => state.prevParticipation.value.payload);

    return (
        <div className="prev-participation-wrapper">
            <div className="title">
                Have you participated in A2SV or Other Hackathons?
            </div>
            <table >
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