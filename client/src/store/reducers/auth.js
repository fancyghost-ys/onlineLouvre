import { LOGIN, REGISTER, LOGOUT } from '../types/types'


const initialState = {
    user: {},
    role: 0,
    token: '',
    IsLoggedIn: false,
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case LOGIN:
            return {
                ...state,
                user: payload.user,
                token: payload.token,
                role: payload.user.role,
                IsLoggedIn: true
            }
        case REGISTER:
            return {
                ...state,
                user: {},
                role: 0,
                token: '',
                IsLoggedIn: false
            }
        case LOGOUT:
            return {
                ...state,
                user: {},
                role: 0,
                token: '',
                IsLoggedIn: false
            }


        default: {
            return state
        }
    }
}

export default authReducer