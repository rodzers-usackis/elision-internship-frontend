import "../API";
import axios from "axios";
import API_ROUTES from "../../constants/API";
import LoggedInUser from "../../model/LoggedInUser";

export async function fetchUserInfo() {
    const response = await axios.get<LoggedInUser>(API_ROUTES.ME);
    return response.data;
}
