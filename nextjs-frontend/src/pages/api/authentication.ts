import axios from 'axios';
import API_ROUTES from "../../constants/API";
import AuthenticationRequest from "../../types/AuthenticationRequest";
import AuthenticationResponse from "../../types/AuthenticationResponse";
import "./axiosDefaults"

export async function loginOnBackend(credentials : AuthenticationRequest) {
    const response = await axios.post<AuthenticationResponse>(API_ROUTES.LOGIN, credentials);
    return response.data;
}

export function setAccessTokenInHttpHeader(token: string) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else delete axios.defaults.headers.common['Authorization']
}

