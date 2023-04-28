import {useEffect, useState} from 'react';

export default function useLocalStorage(key: string) {
    const [value, setValue] = useState<any>(null)

    useEffect(() => {
        const getValue = async () => {
            const storageValue = await localStorage.getItem(key)
            setValue(storageValue)
        }
        getValue()
    }, [key])

    const setter = (newValue: any) => {
        if (newValue !== value) {
            localStorage.setItem(key, newValue)
            setValue(newValue)
        }
    }

    const remove = () => {
        localStorage.removeItem(key)
        setValue(null)
    }
    return [value, setter, remove]
}
