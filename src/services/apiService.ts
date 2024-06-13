import axios from "axios";
import { summaryDataInterface } from "../state/summary.slice";
import { BASE_URL } from "../constants/variables";
import { countryData } from "../state/countries.slice";

// define a type for the response data
interface ReachoutResponce {
  reachoutSourceName: string;
  numberOfIndividualParticipants: number;
  numberOfGroupParticipants: number;
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
            { reachoutSourceName, numberOfGroupParticipants, numberOfIndividualParticipants }: ReachoutResponce) => [reachoutSourceName, numberOfGroupParticipants + numberOfIndividualParticipants])
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

  static getSummaryData = async (): Promise<summaryDataInterface | void> => {
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
