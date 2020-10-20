import { combineReducers } from 'redux';

//Reducers
import { daysReducer as days } from '../bus/days/reducer';
import { filterReducer as filter } from '../bus/filter/reducer';

export const rootReducer = combineReducers({
    days,
    filter,
});