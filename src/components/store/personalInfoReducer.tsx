type PersonalInfoState = {
    username: string
    gender: string
    birth: string
}

type PersonalInfoReducerActionKind = {
    type: 'username' | 'gender' | 'birth'
    payload: string
}

const personalInfoReducer = (state: PersonalInfoState, action: PersonalInfoReducerActionKind) => {
    switch (action.type) {
        case 'username':
            return { ...state, username: action.payload }
        case 'gender':
            return { ...state, gender: action.payload }
        case 'birth':
            return { ...state, birth: action.payload }
    }
}

export default personalInfoReducer
