type DisReducerState = {
    disCatchN: string[]
    disCatchY: string[]
    disHospN: string[]
    disHospY: string[]
}

type DisReducerActionKind = {
    type: 'CATCH_N' | 'CATCH_Y' | 'HOSP_N' | 'HOSP_Y'
    disCode: string
}

const disReducer = (state: DisReducerState, action: DisReducerActionKind) => {
    switch (action.type) {
        case 'CATCH_N':
            state.disCatchN.push(action.disCode)
            state.disCatchY = state.disCatchY.filter((item) => item !== action.disCode)
            return state
        case 'CATCH_Y':
            state.disCatchY.push(action.disCode)
            state.disCatchN = state.disCatchN.filter((item) => item !== action.disCode)
            return state
        case 'HOSP_N':
            state.disHospN.push(action.disCode)
            state.disHospY = state.disHospY.filter((item) => item !== action.disCode)
            return state
        case 'HOSP_Y':
            state.disHospY.push(action.disCode)
            state.disHospN = state.disHospN.filter((item) => item !== action.disCode)
            return state
        default:
            return state
    }
}

export default disReducer
