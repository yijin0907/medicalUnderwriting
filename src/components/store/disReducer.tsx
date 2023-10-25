type DisReducerState = {
    disCatchY: string[]
    disHospY: string[]
}

type DisReducerActionKind = {
    type: 'CATCH_N' | 'CATCH_Y' | 'HOSP_N' | 'HOSP_Y'
    disCode: string
}

const disReducer = (state: DisReducerState, action: DisReducerActionKind) => {
    switch (action.type) {
        case 'CATCH_Y':
            state.disCatchY.push(action.disCode)
            state.disCatchY = [...new Set(state.disCatchY)]
            return state
        case 'CATCH_N':
            state.disCatchY = state.disCatchY.filter((item) => item !== action.disCode)
            return state
        case 'HOSP_Y':
            state.disHospY.push(action.disCode)
            state.disHospY = [...new Set(state.disHospY)]
            return state
        case 'HOSP_N':
            state.disHospY = state.disHospY.filter((item) => item !== action.disCode)
            return state
        default:
            return state
    }
}

export default disReducer
