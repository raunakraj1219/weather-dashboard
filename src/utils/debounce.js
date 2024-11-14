import { useEffect, useState } from "react"

export const useDebounce = (inputText, delay) => {
    const [text, setText] = useState("");


    useEffect(() => {
        const timeout = setTimeout(() => setText(inputText), delay)
        return (() => clearTimeout(timeout))
    }, [inputText])

    return text;
}