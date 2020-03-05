import axios from 'axios'
import { setAlert } from './alert'

import * as Types from './types'

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type: Types.GET_PROFILE,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: Types.PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        })
    }
}