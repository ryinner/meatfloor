import axios from "@/Plugins/Axios";

const prefix = "Index";

/**
 * @returns {Promise}
 */
export function getIndexMenu() {
    return axios.get(`${prefix}/Menu`);
}