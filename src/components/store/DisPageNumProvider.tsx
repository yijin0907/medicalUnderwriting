import { useState } from 'react'
import { DisPageNumContext } from './disContext'

type ContextProviderProps = {
    children: React.ReactNode
}

const DisPageNumProvider = ({ children }: ContextProviderProps) => {
    const [pageNum, setPageNum] = useState('disinfo01')
    const value = { pageNum, setPageNum }
    return <DisPageNumContext.Provider value={value}>{children}</DisPageNumContext.Provider>
}

export default DisPageNumProvider
