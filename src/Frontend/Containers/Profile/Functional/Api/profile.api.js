import axios from "@/Plugins/Axios";
import { useUserStore } from '@/Shared/State/useUserStore/useUserStore';

const prefix = '/Api/Profile';

export function getProfileIndex () {
    const userState = useUserStore();
    return axios.post(`${prefix}`, { user_id: userState.user.id });
}