const usersAgreement = () => import(/* webpackChunkName: "users-agreement" */ "@/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue");

const routes = [
    {path: '/users-agreement', name: 'users-agreement', component: usersAgreement }
]

export default routes