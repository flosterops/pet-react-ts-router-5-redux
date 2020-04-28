import axios from 'axios';

const request = (requestType, url: string, params: any) => {
    return axios[requestType](url, params);
};

export { request };
