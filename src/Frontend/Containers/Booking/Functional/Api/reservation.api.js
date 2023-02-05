import axios from "@/Plugins/Axios";

const prefix = "/Api/Reservation";

export function createReservation(data) {
    return axios.post(`${prefix}/Create`, data);
}