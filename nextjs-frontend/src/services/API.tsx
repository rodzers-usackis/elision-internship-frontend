import axios, {CreateAxiosDefaults} from 'axios'
import {BACKEND_BASEURL} from "../constants/API";

// Defaults
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common['Accept'] = 'application/json'
//disable cors?
// axios.defaults.withCredentials = false;

// Backend API URL
export const backendURL = axios.create({
    baseURL: BACKEND_BASEURL
} as CreateAxiosDefaults);



