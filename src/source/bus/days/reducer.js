// Types
import { types } from './types';

const initialState = {
    data: null,
    isFetching: false,
    error: null,
    displayed: '',
    filteredData: null,
};

export const  daysReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.DAYS_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.DAYS_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.DAYS_SET_FETCHING_ERROR:
            return {
                ...state,
                error: payload,
                data: null,
            };
        case types.DAYS_FILL:
            return {
                ...state,
                data: payload,
                error: null,
            };
        case types.DAYS_DISPLAYED_DAY:
            return {
                ...state,
                displayed: payload,
            };
        case types.DAYS_SET_FILTERED_DATA:
            return {
                ...state,
                filteredData: payload,
            }
        default:
            return state;
    }
}