import { root } from './config';

export const api = Object.freeze({
    weather: {
        fetch: () => {
            return fetch(`${root}/forecast?limit=7`, {
                method: 'GET',
            });
        },
    },
});