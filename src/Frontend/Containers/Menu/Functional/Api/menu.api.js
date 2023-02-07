import axios from "@/Plugins/Axios";

const prefix = '/Api/Menu';

export function getMenuItems() {
    return axios.get(`${prefix}`);
}