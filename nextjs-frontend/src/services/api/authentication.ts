import axios from 'axios';
import API_ROUTES from "../../constants/API";
import AuthenticationRequest from "../../types/AuthenticationRequest";
import AuthenticationResponse from "../../types/AuthenticationResponse";
import {User} from "../../model/User";
import {ApiResponse} from "../../model/ApiResponse";
import {backendURL} from "./API";
import {RegistrationForm} from "../../model/RegistrationForm";

export async function loginOnBackend(credentials : AuthenticationRequest) {
    const response = await axios.post<AuthenticationResponse>(API_ROUTES.LOGIN, credentials);
    return response.data;
}

//TODO: backend returns accessToken on successful registration - add it then
export async function register(registrationForm: RegistrationForm): Promise<AuthenticationResponse> {
    try {
        const response = await backendURL.post(API_ROUTES.REGISTER, registrationForm)
        return {
            accessToken: response.data.accessToken,
            status: response.status,
            message: response.data.message,
        }
    } catch (error: any) {
        return {
            accessToken: "",
            status: error.response.status,
            message: error.response.data.message,
        }
    }
}

export function setAccessTokenInHttpHeader(token: string) {
    if (!!token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else delete axios.defaults.headers.common['Authorization']
}

