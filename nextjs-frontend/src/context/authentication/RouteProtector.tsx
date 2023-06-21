import {ReactNode, useContext, useEffect} from "react";
import AuthenticationContext from "./AuthenticationContext";
import {useRouter} from "next/router";

const authenticatedUserRoutes = [
    "/dashboard/my-catalog",
    "/dashboard/reports",
    "/dashboard/alerts",
]

const unauthenticatedUserRoutes = [
    "/",
    "/login",
    "/register",
]


export default function RouteProtector({children}: { children: ReactNode }) {
    const { isAuthenticated } = useContext(AuthenticationContext);
    const router = useRouter();

    useEffect(() => {

        // Redirect if user is not authenticated and accessing authenticated routes
        if (!isAuthenticated() && authenticatedUserRoutes.includes(router.pathname)) {
            router.replace("/login"); // Redirect to login page
        }

        // Redirect if user is authenticated and accessing unauthenticated routes
        if (isAuthenticated() && unauthenticatedUserRoutes.includes(router.pathname)) {
            router.replace("/dashboard/my-catalog"); // Redirect to dashboard
        }
    }, [isAuthenticated, router]);

    return <>{children}</>;
}