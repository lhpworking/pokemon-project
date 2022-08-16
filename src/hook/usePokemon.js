import { useEffect, useState } from "react"

const usePokemon = (promise, deps) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetchData()
    }, deps)
    const fetchData = () => {
        promise()
            .then((res) => {
                if (res) setData(res)
                setLoading(false)
            })
    }
    return { data, loading }
}

export default usePokemon
