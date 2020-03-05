import * as Types from '../actions/types'

const initState = {
    token: localStorage.getItem('token'),
    isAuth: null,
    loading: true,
    user: null
}

export default function (state = initState, { type, payload }) {
    switch (type) {
        case Types.USER_LOADED:
            console.log('payload', payload)
            return {
                ...state,
                isAuth: true,
                loading: false,
                user: payload
            }

        case Types.REGISTER_SUCCESS:
        case Types.LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuth: true,
                loading: false
            }

        case Types.REGISTER_FAIL:
        case Types.AUTH_ERROR:
        case Types.LOGIN_FAIL:
        case Types.LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuth: false,
                loading: false
            }

        default:
            return state
    }
}