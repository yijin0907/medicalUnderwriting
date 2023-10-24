import { useState } from 'react'
import DisContext from './disContext'

type ContextProviderProps = {
    children: React.ReactNode
}

const DisProvider = ({ children }: ContextProviderProps) => {
    const [pageNum, setPageNum] = useState('disinfo01')
    const value = { pageNum, setPageNum }
    return <DisContext.Provider value={value}>{children}</DisContext.Provider>
}

export default DisProvider
