import {ReactElement, useEffect} from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import {loginOnBackend, setAccessTokenInHttpHeader} from "../../pages/api/authentication";
import {decodeToken, isExpired} from "react-jwt";
import AuthenticationRequest from "../../types/AuthenticationRequest";
import {useMutation, useQuery} from "@tanstack/react-query";
import AuthenticationResponse from "../../types/AuthenticationResponse";
import LoginContext from "./AuthenticationContext";
import {Alert, CircularProgress} from "@mui/material";

interface IWithChildren {
    children: ReactElement | ReactElement[]
}

export default function AuthenticationContextProvider({children}: IWithChildren) {


    const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage('accessToken')
    const {
        data: authenticationResponse,
        mutateAsync: mutateLoggingInAsync,
        isLoading,
        isError
    } = useMutation(['login'], loginOnBackend)
    // const [loggedInUser, setLoggedInUser, removeLoggedInUser] = useLocalStorage('user')

    useEffect(() => {
        setAccessTokenInHttpHeader(accessToken)
    }, [accessToken])


    if(isLoading) return <CircularProgress/>


    function isAuthenticated() {
        return !isExpired(accessToken)
    }


    function login(credentials: AuthenticationRequest, onSuccess: () => void, onError: () => void) {

        return mutateLoggingInAsync(credentials).then((response: AuthenticationResponse) => {
            setAccessToken(response.accessToken)
            // setLoggedInUser(response.user)
            onSuccess()
            return response;
        }).catch((error) => {
            onError()
        })
    }


    function logout() {
        removeAccessToken()
        // removeLoggedInUser()
    }

    return (
        <LoginContext.Provider
            value={{
                isAuthenticated,
                undefined, // loggedInUser,
                login,
                logout,
            }}
        >
            {children}
        </LoginContext.Provider>
    )


}