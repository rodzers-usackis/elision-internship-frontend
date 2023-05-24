import axios from "axios";
import API_ROUTES from "../../constants/API";
import {ScrapingTask} from "../../model/ScrapingTask";


export function postScrapingTask(scrapingTask: ScrapingTask) {
    return axios.post(API_ROUTES.SCRAPING_TASKS, scrapingTask)
}