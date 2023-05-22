import {createContext} from "react";

export interface AlertCountContext {
    alertContextCount: number;
    setAlertContextCount: (alertContextCount: number) => void;
}

export default createContext<AlertCountContext>({
    alertContextCount: -1,
    setAlertContextCount: (value: number) => {
    },
})