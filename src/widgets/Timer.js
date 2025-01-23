import { useRef } from "react";
import { useEffect, useState } from "react"

export const useSecondsTimer = (timeoutInSec) => {
    const [counter, setCounter] = useState(timeoutInSec);
    const intervalRef = useRef(null)
    
    useEffect(() => {
        clearInterval(intervalRef.current);
        setCounter(timeoutInSec)
        intervalRef.current = setInterval(() => {
            setCounter((counter) => counter - 1)
        }, 1000);
        return () => clearInterval(intervalRef.current);
    }, [timeoutInSec]);

    useEffect (() => {
        if (counter <= 0) {
            clearInterval(intervalRef.current)
        }
    }, [counter])
    return [counter]
} 