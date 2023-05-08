import axios from 'axios'
import { User } from '../model/User'
import { ApiResponse } from '../model/ApiResponse'
import {Product} from "<components>/model/Product";

// Defaults
axios.defaults.headers.post["Content-Type"] = "application/json";

// Backend API URL
const backendURL = axios.create({
    baseURL: 'http://localhost:8080',
});

const API_URL = '/api/'

export async function registerUser(user: User): Promise<ApiResponse> {
    try {
        const response = await backendURL.post(API_URL + '/auth/register', user)

        return {
            status: response.status,
            message: response.data
        }
    } catch (error: any) {
        return {
            status: error.response.status,
            message: error.response.data
        }
    }
}

export async function getProducts(): Promise<Product[]> {
    try {
        const response = await backendURL.get(API_URL + 'products')

        console.log('te response', response.data)
        return response.data
    } catch (error: any) {
        // handle errors
        console.log(error)

        return [] as Product[]
    }
}