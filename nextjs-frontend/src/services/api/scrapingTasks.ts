import axios, { AxiosResponse } from "axios";
import API_ROUTES from "../../constants/API";
import { ScrapingTask } from "../../model/ScrapingTask";

export async function postScrapingTask(scrapingTask: ScrapingTask) {
    try {
        const response: AxiosResponse<any> = await axios.post(
            API_ROUTES.SCRAPING_TASKS,
            scrapingTask
        );
        // Handle the response or return specific data if needed
        return response.data;
    } catch (error) {
        // Handle the error
        throw error;
    }
}
