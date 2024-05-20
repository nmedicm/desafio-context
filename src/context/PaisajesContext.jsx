import { createContext, useEffect, useState } from "react";

export const PaisajesContext = createContext()

const PaisajesProvider = ({ children }) => {
    const [paisajes, setPaisajes] = useState([])

    const getData = async () => {
            const data = await fetch("/photos.json")
            const response = await data.json()
            let paisajes = Object.values(response)
            const allData = paisajes.flat().map(paisaje => ({ ...paisaje, isFavorite: false }))
            setPaisajes(allData)

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <PaisajesContext.Provider value={{ paisajes, setPaisajes }}>
            {children}
        </PaisajesContext.Provider>
    )
}

export default PaisajesProvider;