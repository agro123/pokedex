import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [result, setResult] = useState({ data: undefined, loading: true })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url)
                const d = await resp.json()
                if (d) {
                   setTimeout(setResult({ loading: false, data: d }),1000)
                }
            } catch (e) {
                console.log('Ocurrio un error:', e)
                setResult({ loading: false, data: undefined })
            }
        }
        fetchData();
    }, [url])


    

    return result

}
