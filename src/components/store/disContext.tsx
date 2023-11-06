import { createContext } from 'react'

// type PageNumContextType = {
//     pageNum: string
//     setPageNum: React.Dispatch<React.SetStateAction<string>>
// }

type DisReducerActionKind = {
    type: 'CATCH_N' | 'CATCH_Y' | 'HOSP_N' | 'HOSP_Y'
    payload: string
}

type OpiontReducerContextType = {
    state: {
        disCatchY: string[]
        disHospY: string[]
    }
    dispatch: React.Dispatch<DisReducerActionKind>
}

// export const DisPageNumContext = createContext<null | PageNumContextType>(null)
export const DisOptionReducerContext = createContext<null | OpiontReducerContextType>(null)
