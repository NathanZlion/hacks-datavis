import axios from "axios";
import { summaryDataInterface } from "../state/summary.slice";
import { BASE_URL } from "../constants/variables";
import { countryData } from "../state/countries.slice";
import { prevParticipationDataInterface } from "../state/prevParticipation.slice";
import { Result } from "@/lib/utils";

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
  static getHeardFrom = async () : Promise<Result<any>> => {
    try {
      let response = await axios.get(`${BASE_URL}/reachout`);
      if (response.data.message !== "success" || !Array.isArray(response.data.data)) {
        return { success: false, error: Error(response.data.message) };
      } else {
        return {
          success: true,
          value: [
            ["Heard From", "Number of Participants"],
            ...response.data.data.map((
              { reachoutSourceName, numberOfGroupParticipants, numberOfIndividualParticipants }: ReachoutResponce) => [reachoutSourceName, numberOfGroupParticipants + numberOfIndividualParticipants])
          ]
        };
      }
    } catch (error) {
      return { success: false, error: Error("Failed to load Reachout Source Data") };
    }
  }

  static getCountryData = async (): Promise<Result<countryData>> => {
    try {
      let response = await axios.get(`${BASE_URL}/country`);

      if (response.status !== 200) {
        return { success: true, value: {} };
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

        return { success: true, value: transformedData }
      }
    } catch (error) {

      return { success: false, error: Error("Failed to load Country Data") }
    }
  }

  static getPreviousHackathonParticipation = async (): Promise<Result<prevParticipationDataInterface>> => {
    try {
      let response = await axios.get(`${BASE_URL}/prevparticipation`);
      if (response.data.message !== "success") {
        return { success: false, error: response.data.message };
      } else {
        return { success: true, value: response.data.data };
      }
    } catch (error) {
      return {
        success: false,
        error: Error("Falied to load Previous Participation Data")
      }
    }
  }

  static getSummaryData = async (): Promise<Result<summaryDataInterface | void>> => {
    try {
      let response = await axios.get(`${BASE_URL}/summary`);
      if (response.data.message !== "success") {
        return { success: false, error: Error(response.data.message) };
      } else {
        return { success: true, value: response.data.data };
      }
    } catch (error) {
        return { success: false, error: Error("Failed to load summary Data") };
    }
  }
}
