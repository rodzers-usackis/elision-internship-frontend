import {ReactElement, useEffect} from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import {loginOnBackend, setAccessTokenInHttpHeader} from "../../services/api/authentication";
import {decodeToken, isExpired} from "react-jwt";
import AuthenticationRequest from "../../model/AuthenticationRequest";
import {useMutation, useQuery} from "@tanstack/react-query";
import AuthenticationResponse from "../../model/AuthenticationResponse";
import AuthenticationContext from "./AuthenticationContext";
import {Alert, CircularProgress} from "@mui/material";
import {fetchUserInfo} from "../../services/api/users";
import {useRouter} from "next/router";
import LoggedInUser from "../../model/LoggedInUser";

interface IWithChildren {
    children: ReactElement | ReactElement[]
}

export default function AuthenticationContextProvider({children}: IWithChildren) {


    // const [loggedInUser, setLoggedInUser, removeLoggedInUser] = useLocalStorage('user')
    const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage('accessToken')
    const router = useRouter();
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
    } = useQuery<LoggedInUser>({queryKey: ['user'], queryFn: fetchUserInfo, enabled: isAuthenticated()});

    useEffect(() => {
        setAccessTokenInHttpHeader(accessToken)
    }, [accessToken])

    // useEffect(() => {
    //     if (!!user) {
    //         setLoggedInUser(JSON.stringify(user))
    //     }
    // }, [user])


    function isAuthenticated() {
        console.log(!isExpired(accessToken), 'access token', accessToken)
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
        removeAccessToken();
        // removeLoggedInUser();
        router.push("/?logout=true")
    }

    function logBackInWithToken() {

    }

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated,
                loggedInUser : user,
                login,
                logout,
                isLoadingAuthentication,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )


}