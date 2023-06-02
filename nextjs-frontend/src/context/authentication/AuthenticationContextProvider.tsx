import {ReactElement, useEffect} from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import {loginOnBackend, setAccessTokenInHttpHeader} from "../../services/api/authentication";
import {decodeToken, isExpired} from "react-jwt";
import AuthenticationRequest from "../../model/AuthenticationRequest";
import {useMutation, useQuery} from "@tanstack/react-query";
import AuthenticationResponse from "../../model/AuthenticationResponse";
import AuthenticationContext from "./AuthenticationContext";
import {fetchUserInfo} from "../../services/api/users";
import LoggedInUser from "../../model/LoggedInUser";
import {router} from "next/client";
import {useRouter} from "next/router";
import {CircularProgress} from "@mui/material";
import Box from "@mui/material/Box";
import axios from "axios";

interface IWithChildren {
    children: ReactElement | ReactElement[]
}

export default function AuthenticationContextProvider({children}: IWithChildren) {


    const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage('accessToken')
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
    } = useQuery<LoggedInUser>({
        queryKey: ['user'], queryFn: fetchUserInfo, enabled: isAuthenticated(), onError: (error) => {
            if(!!error.config.headers.Authorization) {
                removeAccessToken();
                delete axios.defaults.headers.common['Authorization'];
            }
        }
    });
    const router = useRouter();

    useEffect(() => {
        setAccessTokenInHttpHeader(accessToken)
    }, [accessToken])


    // if (isLoadingAuthentication || isLoadingUser) {
    //     return (<Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center', minHeight:'80%'}}><CircularProgress/></Box>)
    // }


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
        delete axios.defaults.headers.common['Authorization'];
        router.push("/?logout=true");
    }


    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated,
                loggedInUser: user,
                login,
                logout,
                isLoading: isLoadingAuthentication || isLoadingUser,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )


}