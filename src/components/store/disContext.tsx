import { createContext } from 'react'

type DisType = {
    disCode: string
    disName: string
}

type DisReducerActionKind = {
    type: 'CATCH_N' | 'CATCH_Y' | 'HOSP_N' | 'HOSP_Y'
    payload: DisType
}

type OpiontReducerContextType = {
    state: {
        disCatchY: Array<DisType>
        disHospY: Array<DisType>
    }
    dispatch: React.Dispatch<DisReducerActionKind>
}

export const DisOptionReducerContext = createContext<null | OpiontReducerContextType>(null)
