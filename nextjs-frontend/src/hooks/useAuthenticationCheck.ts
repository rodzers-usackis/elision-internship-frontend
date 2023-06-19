import {useContext, useEffect, useState} from "react";
import AuthenticationContext from "../context/authentication/AuthenticationContext";
import {useRouter} from "next/router";
import useLocalStorage from "./useLocalStorage";

export default function useAuthenticationCheck() {
    const {isAuthenticated} = useContext(AuthenticationContext)
    const router = useRouter()
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login')
        } else {
            setFinished(true)
        }
    }, [isAuthenticated, router])

    return finished
}
