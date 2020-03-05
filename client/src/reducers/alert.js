import * as Types from '../actions/types'

const initState = [];

export default function (state = initState, { type, payload }) {
    switch (type) {
        case Types.SET_ALERT:
            return [...state, payload]

        case Types.REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload)

        default:
            return state
    }
}
