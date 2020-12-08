import axiosRq from "axios";
/**
 * @returns {Object} contains methods with keys describing requests, 
 */
const axios = () => {
    const defaultOptions = {
        // can add default options for every request.
    }
    return {

        /**
         * @param {String}, url is the complete name of the rest api url.
         * @param {Object}, conatins options object with request specific options.
         * @returns {Function}, return axios function, that will be called. 
         */
        get: (url, options = {}) =>
            axiosRq.get(url, { ...defaultOptions, ...options }),
        post: (url, data, options = {}) =>
            axiosRq.post(url, data, { ...defaultOptions, ...options }),
        put: (url, data, options = {}) =>
            axiosRq.put(url, data, { ...defaultOptions, ...options }),
        delete: (url, options = {}) =>
            axiosRq.delete(url, { ...defaultOptions, ...options }),
    };
};


export default axios;
