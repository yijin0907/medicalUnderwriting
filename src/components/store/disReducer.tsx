type DisType = {
    disCode: string
    disName: string
}

type DisReducerState = {
    disCatchY: Array<DisType>
    disHospY: Array<DisType>
}

type DisReducerActionKind = {
    type: string
    payload: DisType
}

const disReducer = (state: DisReducerState, action: DisReducerActionKind) => {
    switch (action.type) {
        case 'CATCH_Y':
            // state.disCatchY = [...new Set([...state.disCatchY, action.payload])]
            state.disCatchY = [...state.disCatchY, action.payload]
            return state
        case 'CATCH_N':
            state.disCatchY = state.disCatchY.filter((item) => item.disCode !== action.payload.disCode)
            return state
        case 'HOSP_Y':
            state.disHospY = [...state.disHospY, action.payload]
            return state
        case 'HOSP_N':
            state.disHospY = state.disHospY.filter((item) => item.disCode !== action.payload.disCode)
            return state
        default:
            return state
    }
}

export default disReducer
