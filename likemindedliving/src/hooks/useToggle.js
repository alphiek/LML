import { useState, useCallback } from 'react'

export const useToggle = (initialValue) => {
    const [toggleValue, setToggleValue] = useState(initialValue)
    const toggle = useCallback(() => setToggleValue(!toggleValue))

    return [toggleValue, toggle]
}