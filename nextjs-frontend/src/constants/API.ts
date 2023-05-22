const PORT = 8080;

export const BACKEND_BASEURL = `http://localhost:${PORT}`;

export const API_ROUTES = {
    LOGIN : `${BACKEND_BASEURL}/api/auth/login`,
    REGISTER : `${BACKEND_BASEURL}/api/auth/register`,
    ME : `${BACKEND_BASEURL}/api/users/me`,
    TRACKED_PRODUCTS : `${BACKEND_BASEURL}/api/client-company/tracked-products`,
    ALERTS: `${BACKEND_BASEURL}/api/alerts`,
    ALERT_COUNT: `${BACKEND_BASEURL}/api/alerts/unread/count`,
};

export default API_ROUTES;