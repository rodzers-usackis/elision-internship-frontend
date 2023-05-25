import { createContext } from 'react'
import AuthenticationRequest from "../../model/AuthenticationRequest";

export interface IAuthenticationContext {
    isAuthenticated: () => boolean;
    loggedInUser: string | null;
    login: (credentials: AuthenticationRequest, onSuccess: () => void, onError: () => void) => void;
    logout: () => void;
    logBackInWithToken:()=>void;
}

export default createContext<IAuthenticationContext>({
    isAuthenticated: () => false,
    loggedInUser: null,
    login: (val) => {},
    logout: () => {},
    logBackInWithToken: () => {}
})

