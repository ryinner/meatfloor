import { useUserStore } from '@/Shared/State/useUserStore/useUserStore';

const prefix = '/profile';

const profileIndex = () => import(/* webpackChunkName: "profile-index" */ "@/Containers/Profile/UI/Views/ProfileIndex/ProfileIndex.vue");

const routes = [
    { path: prefix, name: 'profile', component: profileIndex, beforeEnter: () => {
        const userState = useUserStore();
        if (userState.user === null) {
            return false;
        }
    } }
];

export default routes;