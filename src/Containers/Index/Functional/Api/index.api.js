import axios from "@/Plugins/Axios";

const prefix = "Index";

export function getIndexMenu() {
    return axios.get(`${prefix}/Menu`);
}