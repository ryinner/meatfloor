const prefix = '/menu';

const index = () => import(/* webpackChunkName: "menu-index" */ "@/Containers/Menu/UI/Views/MenuIndex/MenuIndex.vue");

const routes = [
    { path: prefix, name: 'menu', component: index }
];

export default routes;