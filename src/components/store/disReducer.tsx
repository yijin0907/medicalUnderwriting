type DisReducerState = {
    disCatchY: string[]
    disHospY: string[]
}

type DisReducerActionKind = {
    type: 'CATCH_N' | 'CATCH_Y' | 'HOSP_N' | 'HOSP_Y'
    payload: string
}

const disReducer = (state: DisReducerState, action: DisReducerActionKind) => {
    switch (action.type) {
        case 'CATCH_Y':
            state.disCatchY = [...new Set([...state.disCatchY, action.payload])]
            return state
        case 'CATCH_N':
            state.disCatchY = state.disCatchY.filter((item) => item !== action.payload)
            return state
        case 'HOSP_Y':
            state.disHospY = [...new Set([...state.disHospY, action.payload])]
            return state
        case 'HOSP_N':
            state.disHospY = state.disHospY.filter((item) => item !== action.payload)
            return state
        default:
            return state
    }
}

export default disReducer
