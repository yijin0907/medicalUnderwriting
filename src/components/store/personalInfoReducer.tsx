type PersonalInfoType = {
    username: string
    gender: string
    birth: string
}

type PersonalInfoReducerActionKind = {
    type: 'update'
    payload: PersonalInfoType
}

const personalInfoReducer = (state: PersonalInfoType, action: PersonalInfoReducerActionKind) => {
    switch (action.type) {
        case 'update':
            state = { ...action.payload }
            console.log(state)
            return state
    }
}

export default personalInfoReducer
