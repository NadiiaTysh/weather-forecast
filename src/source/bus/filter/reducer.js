// Types
import { types } from './types';

const initialState = {
    isCloudyChecked: false,
    isSunnyyChecked: false,
    dataMin: '',
    dataMax: '',
};

export const filterReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.FILTER_SET_CLOUDY:
            return {
                ...state,
                isCloudyChecked: true,
                isSunnyyChecked: false,
            };
        case types.FILTER_SET_SUNNY:
            return {
                ...state,
                isSunnyyChecked: true,
                isCloudyChecked: false,
            };
        case types.FILTER_SET_MIN_TEMP:
            return {
                ...state,
                dataMin: payload,
            };
        case types.FILTER_SET_MAX_TEMP:
            return {
                ...state,
                dataMax: payload,
            };
        case types.FILTER_RESET:
            return {
                isCloudyChecked: false,
                isSunnyyChecked: false,
                dataMin: '',
                dataMax: '',
            }
        default:
            return state;
    }
}