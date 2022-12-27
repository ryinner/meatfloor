const index = () => import(/* webpackChunkName: "booking-index" */ "../Views/BookingIndex/BookingIndex.vue")

const routes = [
    {path: "/booking", name: "booking", component: index}
]

export default routes