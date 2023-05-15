import {ReactElement, useContext} from "react";
import AuthenticationContext from "./AuthenticationContext";
import {useRouter} from "next/router";
import {Button, Typography} from "@mui/material";
import Link from "next/link";

const protectedRoutes = [
    "/dashboard"
]


export default function RouteProtector({children}: { children: ReactElement }) {
    const {isAuthenticated} = useContext(AuthenticationContext);
    const router = useRouter();

    if (protectedRoutes.some(route => router.pathname.startsWith(route)) && !isAuthenticated()) {
        //TODO: something better here
        return (<div style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            marginTop: "5rem",
            gap: "1rem",
        }}><Typography>You are not
            logged in.</Typography>
            <Button sx={{maxWidth: "10rem"}} variant={"contained"}><Link href={"/login"}>Log in</Link></Button>
            <Button sx={{maxWidth: "10rem"}} variant={"contained"}><Link href={"/"}>Home page</Link></Button>
        </div>)
    } else {
        return children;
    }


}