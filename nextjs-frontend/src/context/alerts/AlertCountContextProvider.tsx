import {ReactNode, useState} from "react";
import AlertCountContext from "../../context/alerts/AlertCountContext";

export default function AlertCountContextProvider({children}: { children: ReactNode }) {
    const [alertContextCount, setAlertContextCount] = useState(-1)

    return (
        <AlertCountContext.Provider value={{alertContextCount, setAlertContextCount}}/>
    )
}