import { useDispatch, useSelector } from 'react-redux';
import { filterActions } from '../actions';
import { daysActions } from '../../days/actions';

import cx from 'classnames';

export const useFilter = (props) => {
    const dispatch = useDispatch();

    const {
        isCloudyChecked,
        isSunnyyChecked,
        dataMin,
        dataMax,
    } = useSelector((state) => state.filter);

    const {
        data,
        isFetching,
        filteredData,
    } = useSelector((state) => state.days);

    const checkboxCloudy = cx({
        "checkbox": true,
        "selected": isCloudyChecked,
    });

    const checkboxSunny = cx({
        "checkbox": true,
        "selected": isSunnyyChecked,
    });

    const buttonActive = cx({
        "disabled": !(isCloudyChecked || isSunnyyChecked 
            || dataMin || dataMax),
    });

    const handleCloudyCheckbox = () => {
        dispatch(filterActions.setCloudy());
    };

    const handleSunnyyCheckbox = () => {
        dispatch(filterActions.setSunny());
    };

    const handleDataMin = (value) => {
        dispatch(filterActions.setMinTemp(value));
    };
    
    const handleDataMax = (value) => {
        dispatch(filterActions.setMaxTemp(value));
    };

    const handleFilter = () => {
        const weatherType = isSunnyyChecked ? "sunny" : (isCloudyChecked ? "cloudy" : "");
        let filtered = null;
        
        if (weatherType && dataMin && dataMax) {
            filtered = (!isFetching && data && data.length && data.filter((item) => 
            (item.type === weatherType && item.temperature >= dataMin && item.temperature <= dataMax)));
        } else if (weatherType && dataMin) {
            filtered = (!isFetching && data && data.length && data.filter((item) => 
            (item.type === weatherType && item.temperature >= dataMin)));
        } else if (weatherType && dataMax) {
            filtered = (!isFetching && data && data.length && data.filter((item) => 
            (item.type === weatherType && item.temperature <= dataMax)));
        } else if (dataMin && dataMax) {
            filtered = (!isFetching && data && data.length && data.filter((item) => 
            (item.temperature >= dataMin && item.temperature <= dataMax)));
        } else if (weatherType) {
            filtered = (!isFetching && data && data.length && data.filter((item) => 
            (item.type === weatherType)));
        } else if (dataMin) {
            filtered = (!isFetching && data && data.length && data.filter((item) => 
            (item.temperature >= dataMin)));
        } else if (dataMax) {
            filtered = (!isFetching && data && data.length && data.filter((item) => 
            (item.temperature <= dataMax)));
        };
        
        dispatch(daysActions.setFilteredData(filtered));
    };

    const handleClear = () => {
        let filtered = null;

        dispatch(filterActions.reset());
        dispatch(daysActions.setFilteredData(filtered));
    };

    const handleFilterClear = () => {
        filteredData ? handleClear() : handleFilter();
    };

    const filterClear = !filteredData ? 'Отфильтровать' : 'Сбросить';

    return {
        dataMin,
        dataMax,
        checkboxCloudy,
        checkboxSunny,
        buttonActive,
        handleCloudyCheckbox,
        handleSunnyyCheckbox,
        handleDataMin,
        handleDataMax,
        handleFilterClear,
        filterClear,
        filteredData,
    }
}