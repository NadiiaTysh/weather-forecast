// Core
import React from 'react';

// Hooks
import { useDaysFetch } from '../hooks/useDaysFetch';


export const ForecastJsx = () => {
    const {isFetching, newData, error} = useDaysFetch();

    if (error && error.status === 404) {
        return <p>Not Found</p>;
    }

    if (error && error.status !== 404) {
        return <p>Something went wrong</p>;
    }

    return !isFetching && newData && newData.length !== 0 && (
        !isFetching && newData && newData.length !== 0 && (
            <div className="current-weather">
                <p className="temperature">{newData[0].temperature}</p>
                <p className="meta">
                <span className="rainy">%{newData[0].rain_probability}</span>
                <span className="humidity">%{newData[0].humidity}</span>
                </p>
            </div>
        )
    )
}