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
        if (newValue !== value && !!newValue) {
            localStorage.setItem(key, newValue)
            setValue(newValue)
        }
    }

    const remove = () => {
        setValue(null)
        localStorage.removeItem(key)
    }
    return [value, setter, remove]
}
