import axios from "@/Plugins/Axios";

const prefix = "Reservation";

export function createReservation(data) {
    return axios.post(`${prefix}/Create`, data);
}