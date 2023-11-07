import { createContext } from 'react'

type PersonalInfoReducerActionKind = {
    type: 'update'
    payload: {
        username: string
        gender: string
        birth: string
    }
}

type PersonalInfoReducerContextType = {
    state: {
        username: string
        gender: string
        birth: string
    }
    dispatch: React.Dispatch<PersonalInfoReducerActionKind>
}

export const PersonalInfoReducerContext = createContext<null | PersonalInfoReducerContextType>(null)
