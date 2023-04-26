import axios from 'axios'
import { User } from '../model/User'
import { ApiResponse } from '../model/ApiResponse'

// Defaults
axios.defaults.headers.post["Content-Type"] = "application/json";

// Backend API URL
const backendURL = axios.create({
    baseURL: 'http://localhost:8080',
});

const AUTHENTICATION_URL = '/api/auth/'

export async function registerUser(user: User): Promise<ApiResponse> {
    try {
        const response = await backendURL.post(AUTHENTICATION_URL + 'register', user)

        return {
            status: response.status,
            message: response.statusText
        }
    } catch (error: any) {
        return {
            status: error.response.status,
            message: error.response.statusText
        }
    }
}