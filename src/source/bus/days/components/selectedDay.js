// Core
import React from 'react';

// Hooks
import { useDaysFetch } from '../hooks/useDaysFetch';

// Moment Library
import moment from 'moment';
import 'moment/locale/ru';

export const SelectedDay = () => {
    const {isFetching, newData, error} = useDaysFetch();
    
    if (error && error.status === 404) {
        return <p>Not Found</p>;
    }

    if (error && error.status !== 404) {
        return <p>Something went wrong</p>;
    }
    
    const dateSelected = !isFetching && newData && newData.length !== 0 && moment(newData[0].day).format('DD MMMM');
    const daySelected = !isFetching && newData && newData.length !== 0 && moment(newData[0].day).format('dddd');
    const icon = (!isFetching && newData && newData.length !== 0) ? `icon ${newData[0].type}` : '';
    
    return !isFetching && newData && newData.length !== 0 && (
        <div className="head">
            <div className={icon}></div>
            <div className="current-date">
                <p>{daySelected}</p>
                <span>{dateSelected}</span>
            </div>
        </div>
    );
}
