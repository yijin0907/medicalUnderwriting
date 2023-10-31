import { useReducer } from 'react'
import disReducer from './disReducer'
import disInitialState from './disInitialState'
import { DisOptionReducerContext } from './disContext'

type ContextProviderProps = {
    children: React.ReactNode
}

const DisOptionReducerProvider = ({ children }: ContextProviderProps) => {
    const [state, dispatch] = useReducer(disReducer, disInitialState)
    const value = { state, dispatch }
    return <DisOptionReducerContext.Provider value={value}>{children}</DisOptionReducerContext.Provider>
}

export default DisOptionReducerProvider
