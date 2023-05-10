const PORT = 8080;

export const BACKEND_BASEURL = `http://localhost:${PORT}`;

export const API_ROUTES = {
    LOGIN : `${BACKEND_BASEURL}/api/auth/login`,
    REGISTER : `${BACKEND_BASEURL}/api/auth/register`,
    ME : `${BACKEND_BASEURL}/api/users/me`,
    PRODUCTS : `${BACKEND_BASEURL}/api/products`
};

export default API_ROUTES;