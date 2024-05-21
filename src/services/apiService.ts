import axios from "axios";
import { peopleDataInterface } from "../state/people.slice";
import { BASE_URL } from "../constants/variables";

// define a type for the response data
interface ReachoutResponce {
    reachoutSourceName: string;
    numberOfParticipants: number;
}

export class ApiService {
    static async getHeardFrom () {
        try {
            // get env variable from process
            let response = await axios.get(`${BASE_URL}/reachout`);
            if (response.data.message !== "success"|| !Array.isArray(response.data.data)) {
                return [];
            } else {
                return [
                    ["Heard From", "Number of Participants"],
                    ...response.data.data.map((
                        { reachoutSourceName, numberOfParticipants }: ReachoutResponce) => [reachoutSourceName, numberOfParticipants])
                ];
            }
        } catch (error) {
            return [];
        }
    }

    static  getCountryData = async() : Promise<peopleDataInterface | void> => {

    }

    static async getParticipantData () {

    }

    static  getSummaryData = async () : Promise<peopleDataInterface | void>  => {
        try {
            let response = await axios.get(`${BASE_URL}/summary`);
            console.log(response.data);
            if (response.data.message !== "success" ) {
                return;
            } else {
                return response.data.data;
            }
        } catch (error) {
            return;
        }
    }
}
