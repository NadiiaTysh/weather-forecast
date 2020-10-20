import { types } from './types';

export const filterActions = {
    setCloudy: () => {
        return {
            type: types.FILTER_SET_CLOUDY,
            isCloudyChecked: true,
        }
    },
    setSunny: () => {
        return {
            type: types.FILTER_SET_SUNNY,
            isSunnyyChecked: true,
        }
    },
    setMinTemp: (input) => {
        return {
            type: types.FILTER_SET_MIN_TEMP,
            payload: input,
        }
    },
    setMaxTemp: (input) => {
        return {
            type: types.FILTER_SET_MAX_TEMP,
            payload: input,
        }
    },
    reset: () => {
        return {
            type: types.FILTER_RESET,
        }
    }
}