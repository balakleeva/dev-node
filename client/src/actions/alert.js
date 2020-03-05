import { v4 as uuidv4 } from 'uuid';
import * as Types from './types'

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuidv4();
    dispatch({
        type: Types.SET_ALERT,
        payload: { msg, alertType, id }
    })

    setTimeout(() => dispatch({ 
        type: Types.REMOVE_ALERT, 
        payload: id 
    }), timeout)
}
