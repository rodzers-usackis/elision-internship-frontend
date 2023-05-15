const PORT = 8080;

const API_ROUTES = {
    LOGIN : `http://localhost:${PORT}/api/auth/login`,
    REGISTER : `http://localhost:${PORT}/api/auth/register`,
    GET_ME : `http://localhost:${PORT}/api/users/me`,
};

export default API_ROUTES;