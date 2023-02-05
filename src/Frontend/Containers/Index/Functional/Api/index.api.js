import axios from "@/Plugins/Axios";

const prefix = "/Api/Index";

/**
 * @returns {Promise}
 */
export function getIndexMenu() {
    return axios.get(`${prefix}/Menu`);
}