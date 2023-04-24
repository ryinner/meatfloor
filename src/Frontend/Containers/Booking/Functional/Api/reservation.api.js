import axios from "@/Plugins/Axios";

const prefix = "/Api/Reservation";

export function createReservation(data) {
    return axios.post(`${prefix}/Create`, data);
}

export function removeReservation(id) {
    return axios.post(`${prefix}/Remove`, { id });
}