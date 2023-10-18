import { createContext } from 'react'

type StateContextType = {
    pageNum: string
    setPageNum: React.Dispatch<React.SetStateAction<string>>
}

const DisContext = createContext<null | StateContextType>(null)

export default DisContext
