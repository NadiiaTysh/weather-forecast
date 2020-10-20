import { types } from './types';
import { api } from '../../api/index';

export const daysActions = {
    // Sync
    startFetching: () => {
        return {
            type: types.DAYS_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.DAYS_STOP_FETCHING,
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.DAYS_SET_FETCHING_ERROR,
            payload: error,
            error: true,
        }
    },
    fillDays: (payload) => {
        return {
            type: types.DAYS_FILL,
            payload,
        }
    },
    setDisplayedDay: (payload) => {
        return {
            type: types.DAYS_DISPLAYED_DAY,
            payload,
        }
    },
    setFilteredData: (payload) => {
        return {
            type: types.DAYS_SET_FILTERED_DATA,
            payload,
        }
    },

    //Async
    fetchAsync: () => async (dispatch) => {
        dispatch(daysActions.startFetching());

        const response = await api.weather.fetch();

        if (response.status === 200) {
            const {data} = await response.json();

            dispatch(daysActions.fillDays(data));
        } else {
            const error = {
                status: response.status,
            };

            dispatch(daysActions.setFetchingError(error));
        }
        dispatch(daysActions.stopFetching());
    }, 
}