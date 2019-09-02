import React, { createContext, useContext, useState, useEffect } from 'react'

const WindowDimensionsContext = createContext(null)

const WindowDimensionsProvider = ({ children }) => {
    const [dimensions, setDimensions] = useState({
            width: typeof window !== `undefined` ? window.innerWidth : 0,
            height: typeof window !== `undefined` ? window.innerWidth : 0,
        })
useEffect(() => {
    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
}, [])
return (
    <WindowDimensionsContext.Provider value={dimensions}>
        {children}
    </WindowDimensionsContext.Provider>
)
}

export default WindowDimensionsProvider
export const useWindowDimensions = () => useContext(WindowDimensionsContext)