import React from 'react';
import { Formik, Field } from 'formik';

import { useFilter } from './hooks/useFilter';

export const Filter = () => {
    const {dataMin, dataMax,
        checkboxCloudy, checkboxSunny, buttonActive, 
        handleCloudyCheckbox, handleSunnyyCheckbox,
        handleDataMin, handleDataMax, handleFilterClear,
        filterClear} = useFilter();

    return (
        <Formik>
            <div className="filter">
                <span className={checkboxCloudy} onClick={handleCloudyCheckbox}>Облачно</span>
                <span className={checkboxSunny} onClick={handleSunnyyCheckbox}>Солнечно</span>
                <p className="custom-input">
                    <label htmlFor="min-temperature">Минимальная температура</label>
                    <Field id="min-temperature" type="number" value={dataMin} onChange={(e) => handleDataMin(e.target.value)} />
                </p>
                <p className="custom-input">
                    <label htmlFor="min-temperature">Максимальная температура</label>
                    <Field id="max-temperature" type="number" value={dataMax} onChange={(e) => handleDataMax(e.target.value)} />
                </p>
                <button onClick={handleFilterClear} disabled={buttonActive}>{filterClear}</button>
            </div>
        </Formik>
    )
}