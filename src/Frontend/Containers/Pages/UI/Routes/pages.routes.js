const usersAgreement = () => import(/* webpackChunkName: "users-agreement" */ "@/Containers/Pages/UI/Views/UsersAgreement/UsersAgreement.vue");
const aboutUs = () => import(/* webpackChunkName: "about-us" */ "@/Containers/Pages/UI/Views/AboutUs/AboutUs.vue");
const privacy = () => import(/* webpackChunkName: "privacy" */ "@/Containers/Pages/UI/Views/Privacy/Privacy.vue")

const routes = [
    { path: '/users-agreement', name: 'users-agreement', component: usersAgreement },
    { path: '/about-us', name: 'about-us', component: aboutUs },
    { path: '/privacy', name: 'privacy', component: privacy },
];

export default routes;
