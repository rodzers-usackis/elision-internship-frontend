import {ReactElement, useContext} from "react";
import AuthenticationContext from "./AuthenticationContext";
import {useRouter} from "next/router";
import {Typography} from "@mui/material";
import Link from "next/link";

const protectedRoutes = [
    "/dashboard"
]


export default function RouteProtector({children}: { children: ReactElement }) {
    const {isAuthenticated} = useContext(AuthenticationContext);
    const router = useRouter();

    if (protectedRoutes.some(route => router.pathname.startsWith(route)) && !isAuthenticated()) {
        //TODO: something better here
        return (<div><Typography>You are not logged in.</Typography>
            <Link href={"/login"}>Log in</Link></div>)
    } else {
        return children;
    }


}