import axios from "axios";
import API_ROUTES from "../../constants/API";
import User from "../../types/User";
import "./axiosDefaults"

export async function fetchUserInfo() {
    const response = await axios.get<User>(API_ROUTES.ME);
    return response.data;
}
