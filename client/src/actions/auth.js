import axios from 'axios'
import { setAlert } from './alert'
import * as Types from './types'
import setAuthToken from '../utils/setAuthToken'

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    try {
        const res = await axios.get('/api/auth')

        dispatch({
            type: Types.USER_LOADED,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: Types.AUTH_ERROR
        })
    }
}

export const register = ({ name, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ name, email, password })

    try {
        const res = await axios.post('/api/users', body, config)

        dispatch({
            type: Types.REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())
    } catch (error) {
        const errors = error.response.data.errors

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: Types.REGISTER_FAIL,
        })
    }
}

export const login = ({ email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        const res = await axios.post('/api/auth', body, config)

        dispatch({
            type: Types.LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())
    } catch (error) {
        const errors = error.response.data.errors

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        dispatch({
            type: Types.LOGIN_FAIL,
        })
    }
}

export const logout = () => async dispatch => {
    dispatch({
        type: Types.LOGOUT
    })
}