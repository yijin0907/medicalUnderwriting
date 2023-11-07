import { useReducer } from 'react'
import personalInfoReducer from './personalInfoReducer'
import personalInfoInitialState from './personInfoInitialState'
import { PersonalInfoReducerContext } from './personalInfoContext'

type ContextProviderProps = {
    children: React.ReactNode
}

const PersonalInfoReducerProvider = ({ children }: ContextProviderProps) => {
    const [state, dispatch] = useReducer(personalInfoReducer, personalInfoInitialState)
    const value = { state, dispatch }
    return <PersonalInfoReducerContext.Provider value={value}>{children}</PersonalInfoReducerContext.Provider>
}

export default PersonalInfoReducerProvider
