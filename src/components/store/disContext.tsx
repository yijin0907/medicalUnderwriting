import { createContext } from 'react'

type DisType = {
    disCode: string
    disName: string
}

type DisReducerActionKind = {
    type: string
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
