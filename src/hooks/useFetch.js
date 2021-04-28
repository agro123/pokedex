import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [result, setResult] = useState({ data: undefined, loading: true })

    useEffect(async () => {
        try {
            const resp = await fetch(url)
            const d = await resp.json()
            if (d) {
                setResult({ loading: false, data: d })
            }
        } catch (e) {
            console.log('Ocurrio un error:', e)
            setResult({ loading: false, data: undefined })
        }
    }, [url])

    return result

}
