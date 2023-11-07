import { createContext } from 'react'

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

export const DisOptionReducerContext = createContext<null | OpiontReducerContextType>(null)
