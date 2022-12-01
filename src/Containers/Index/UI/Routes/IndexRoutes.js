const indexPage = () => import(/* webpackChunkName: "index" */  "@/Containers/Index/UI/View/Index/IndexView.vue");

const routes = [
    {path: "/", alias: "/index", name: "index", component: indexPage, meta: {headerOpacity: true}},
];

export default routes;