import axios from "axios";
import { peopleDataInterface } from "../state/people.slice";
import { BASE_URL } from "../constants/variables";
import { countryData } from "../state/countries.slice";

// define a type for the response data
interface ReachoutResponce {
  reachoutSourceName: string;
  numberOfParticipants: number;
}

interface CountryResponseData {
  _id: string;
  countryName: string;
  numberOfIndividualParticipants: number,
  numberOfGroupParticipants: number,
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export class ApiService {
  static async getHeardFrom() {
    try {
      let response = await axios.get(`${BASE_URL}/reachout`);
      if (response.data.message !== "success" || !Array.isArray(response.data.data)) {
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

  static getCountryData = async (): Promise<countryData> => {
    try {
      let response = await axios.get(`${BASE_URL}/country`);

      if (response.status !== 200) {
        return {};
      } else {
        const transformedData: countryData = {};
        {
          response.data.data.map((data: CountryResponseData) => {
            transformedData[data.countryName] = {
              numberOfGroupParticipants: data.numberOfGroupParticipants,
              numberOfIndividualParticipants: data.numberOfIndividualParticipants
            };
          });
        }

        return transformedData
      }
    } catch (error) {
      return {};
    }
  }

  static async getParticipantData() {

  }

  static getSummaryData = async (): Promise<peopleDataInterface | void> => {
    try {
      let response = await axios.get(`${BASE_URL}/summary`);
      if (response.data.message !== "success") {
        return;
      } else {
        return response.data.data;
      }
    } catch (error) {
      return;
    }
  }
}
