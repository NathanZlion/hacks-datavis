import axios from "axios";

export class CachedNetworkRequest {
    private static cacheKeyPrefix = 'axiosCache_';
    private static cacheDurationInSeconds = 15;

    static async get(url: string, cacheDurationInSeconds = CachedNetworkRequest.cacheDurationInSeconds) {
        const cacheKey = this.cacheKeyPrefix + url;
        const cachedData = localStorage.getItem(cacheKey);
        const currentTime = new Date().getTime();

        if (cachedData) {
            const { data, timestamp } = JSON.parse(cachedData);
            if (currentTime - timestamp < cacheDurationInSeconds * 1000) {
                // Use cached data
                return data;
            }
        }

        // Fetch from remote URL if cache is invalid or doesn't exist
        try {
            const response = await axios.get(url);
            const data = response.data;
            localStorage.setItem(cacheKey, JSON.stringify({
                data,
                timestamp: currentTime
            }));
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Re-throw the error after logging it
        }
    }
}
