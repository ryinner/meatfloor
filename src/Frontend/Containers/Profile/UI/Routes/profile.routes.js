const prefix = '/profile';

const profileIndex = () => import(/* webpackChunkName: "profile-index" */ "@/Containers/Profile/UI/Views/ProfileIndex/ProfileIndex.vue");

const routes = [
    { path: prefix, name: 'profile', component: profileIndex }
];

export default routes;