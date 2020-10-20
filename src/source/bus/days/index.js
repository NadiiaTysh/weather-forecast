// Core
import React from 'react';

// Hooks
import { useDaysFetch } from './hooks/useDaysFetch';

// Moment Library
import moment from 'moment';
import 'moment/locale/ru';

// Components
import { ForecastJsx } from './components/forecastJsx';
import { SelectedDay } from './components/selectedDay';

export const Days = () => {
    const {isFetching, data, displayed, error, 
        handleSelectedDay, filteredDataOrNot} = useDaysFetch();

    if (error && error.status === 404) {
        return <p>Not Found</p>;
    }

    if (error && error.status !== 404) {
        return <p>Something went wrong</p>;
    }

    const spinnerJsx = isFetching && (
        <div className="forecast">
            <p className='message'>Loading data from api</p>
        </div>
    );

    const dayJsx = !isFetching && data && data.length && filteredDataOrNot.map((item) => {
        const {day, temperature, type} = item;
        const selected = (day === (displayed || filteredDataOrNot[0].day)) ? 'selected' : '';
        const dayOfWeek = moment(day).format('dddd');

        return (
            <div key = {day} className = {`day ${type} ${selected}`} onClick={() => handleSelectedDay(day)}>
                <p>{dayOfWeek}</p>
                <span>{temperature}</span>
            </div>
        )
    });

    if (Array.isArray(filteredDataOrNot) && filteredDataOrNot.length === 0) {
        return (
            <div className="forecast">
                <p className='message'>По заданным критериям нет доступных дней!</p>
            </div>
        )
    } else {
        return (
            <>
                {spinnerJsx}
                <SelectedDay />
                <ForecastJsx />
                <div className="forecast">
                    {dayJsx}
                </div>
            </>  
        )
    }
}