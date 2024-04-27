import axios from "axios";

// define a type for the response data
interface ReachoutResponce {
    reachoutSourceName: string;
    numberOfParticipants: number;
}

export class ApiService {
    static async getHeardFrom () {
        try {
            const BASE_URL = import.meta.env.VITE_BASE_URL;
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

    static async getCountryData () {

    }

    static async getParticipantData () {

    }

    static async getSummaryData () {

    }
}