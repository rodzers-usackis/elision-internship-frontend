import { createContext } from 'react'
import AuthenticationRequest from "../../model/AuthenticationRequest";
import LoggedInUser from "../../model/LoggedInUser";

export interface IAuthenticationContext {
    isAuthenticated: () => boolean;
    loggedInUser: LoggedInUser | null;
    login: (credentials: AuthenticationRequest, onSuccess: () => void, onError: () => void) => void;
    logout: () => void;
    isLoading: boolean;
}

export default createContext<IAuthenticationContext>({
    isAuthenticated: () => false,
    loggedInUser: null,
    login: (val) => {},
    logout: () => {},
    isLoading: true
})

