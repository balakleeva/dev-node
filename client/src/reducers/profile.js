import * as Types from '../actions/types';

const initState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
}

export default function (state = initState, { type, payload }) {
    switch (type) {
        case Types.GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }
        case Types.PROFILE_ERROR:
            return {
                ...state, loading: false,
                error: payload
            }

        default:
            return state
    }
}