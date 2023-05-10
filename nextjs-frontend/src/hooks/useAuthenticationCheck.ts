import {useContext, useEffect, useState} from "react";
import LoginContext from "../context/login/AuthenticationContext";
import {useRouter} from "next/router";

export default function useAuthenticationCheck() {
    const {isAuthenticated} = useContext(LoginContext)
    const router = useRouter()
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login')
        } else {
            setFinished(true)
        }
    }, [])

    return finished
}