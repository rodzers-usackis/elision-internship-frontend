import {ReactElement, useEffect} from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import {loginOnBackend, setAccessTokenInHttpHeader} from "../../pages/api/authentication";
import {decodeToken, isExpired} from "react-jwt";
import AuthenticationRequest from "../../types/AuthenticationRequest";
import {useMutation, useQuery} from "@tanstack/react-query";
import AuthenticationResponse from "../../types/AuthenticationResponse";
import LoginContext from "./AuthenticationContext";
import {Alert, CircularProgress} from "@mui/material";
import {fetchUserInfo} from "../../pages/api/users";

interface IWithChildren {
    children: ReactElement | ReactElement[]
}

export default function AuthenticationContextProvider({children}: IWithChildren) {


    const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage('accessToken')
    const [loggedInUser, setLoggedInUser, removeLoggedInUser] = useLocalStorage('user')
    const {
        data: authenticationResponse,
        mutateAsync: mutateLoggingInAsync,
        isLoading: isLoadingAuthentication,
        isError: isErrorAuthentication
    } = useMutation(['login'], loginOnBackend);
    const {
        data: user,
        isLoading: isLoadingUser,
        isError: isErrorUser
    } = useQuery({queryKey: ['user', loggedInUser], queryFn: fetchUserInfo, enabled: isAuthenticated()});

    useEffect(() => {
        setAccessTokenInHttpHeader(accessToken)
    }, [accessToken])

    useEffect(() => {
        if(!!user){
            setLoggedInUser(JSON.stringify(user))
        }
    }, [user])

    if (isLoadingAuthentication) return <CircularProgress/>


    function isAuthenticated() {
        return !isExpired(accessToken)
    }


    function login(credentials: AuthenticationRequest, onSuccess: () => void, onError: () => void) {

        return mutateLoggingInAsync(credentials).then((response: AuthenticationResponse) => {
            console.log(response, 'logging in response')
            setAccessToken(response.accessToken)
            onSuccess()
            return response;
        }).catch((error) => {
            onError()
        })
    }


    function logout() {
        removeAccessToken()
        removeLoggedInUser()
    }

    return (
        <LoginContext.Provider
            value={{
                isAuthenticated,
                loggedInUser,
                login,
                logout,
            }}
        >
            {children}
        </LoginContext.Provider>
    )


}