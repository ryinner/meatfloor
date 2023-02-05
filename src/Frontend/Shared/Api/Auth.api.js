//@ts-check
import axios from "@/Plugins/Axios";

const prefix = "/Api/Auth";

/**
 * @function
 * @param {object} userData 
 * @returns {Promise}
 */
export function registration(userData) {
    return axios.post(`${prefix}/Registration`, userData);
}

/**
 * @function
 * @param {object} userData 
 * @returns {Promise}
 */
export function auth(userData) {
    return axios.post(`${prefix}`, userData);
}