const prefix = '/errors';

const error404 = () => import(/* webpackChunkName: "error-404" */ "@/Containers/Errors/UI/Views/Error404/Error404.vue")

const routes = [
    { path: '/:pathMatch(.*)*', alias: `${prefix}/404`, name: 'error-404', component: error404 }
];

export default routes;