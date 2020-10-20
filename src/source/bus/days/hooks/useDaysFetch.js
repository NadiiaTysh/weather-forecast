import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { daysActions } from '../actions';

export const useDaysFetch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(daysActions.fetchAsync());
    }, [dispatch]);

    const {
        data,
        isFetching,
        error,
        displayed,
        filteredData,
    } = useSelector((state) => state.days);

    const handleSelectedDay = (key) => {
        dispatch(daysActions.setDisplayedDay(key));
    };

    const filteredDataOrNot = filteredData ? filteredData : data;
    const selectedData = (displayed && !isFetching && data && data.length && data.filter((item) => item.day === displayed));
    let newData = filteredData ? (selectedData ? selectedData : filteredData) : (selectedData ? selectedData : data);

    return {
        handleSelectedDay,
        newData,
        displayed,
        data,
        isFetching,
        error,
        filteredDataOrNot,
    };
};