const PORT = 8080;

export const BACKEND_BASEURL = `https://pricing-as-a-service.ew.r.appspot.com`;

export const API_ROUTES = {
    LOGIN : `${BACKEND_BASEURL}/api/auth/login`,
    REGISTER : `${BACKEND_BASEURL}/api/auth/register`,
    ME : `${BACKEND_BASEURL}/api/users/me`,
    TRACKED_PRODUCTS : `${BACKEND_BASEURL}/api/client-company/tracked-products`,
    ALERTS: `${BACKEND_BASEURL}/api/alerts`,
    ALERT_SETTINGS: `${BACKEND_BASEURL}/api/alert-settings`,
    ALERT_RULES: `${BACKEND_BASEURL}/api/alert-rules`,
    ALERT_COUNT: `${BACKEND_BASEURL}/api/alerts/unread/count`,
    SCRAPING_TASKS: `${BACKEND_BASEURL}/api/scraping-tasks`,
    PRODUCT_PRICE_HISTORY: `${BACKEND_BASEURL}/api/prices/products`,
    RETAILER_COMPANIES: `${BACKEND_BASEURL}/api/retailer-companies`,
};

export default API_ROUTES;