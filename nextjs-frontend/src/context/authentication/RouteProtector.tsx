import {ReactElement, useContext} from "react";
import AuthenticationContext from "./AuthenticationContext";
import {useRouter} from "next/router";

const protectedRoutes = [
    "/dashboard"
]


export default function RouteProtector({children}: { children: ReactElement }) {
    const {isAuthenticated} = useContext(AuthenticationContext);
    const router = useRouter();

    if (protectedRoutes.some(route => router.pathname.startsWith(route)) && !isAuthenticated()) {
        //TODO: something better here
        return (<div>Login to continue...</div>)
    } else {
        return children;
    }


}