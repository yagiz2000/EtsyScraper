import { createRouter, createWebHistory } from 'vue-router'
/* import Home from '../views/Home.vue'
 */import Stocks from "../views/Stocks.vue";
 import addStock from "../views/addStock.vue";
 import detail from "../views/detail.vue";

const routes = [
  {
    path: '/',
    component: Stocks
  },
  {
    path: '/addProduct',
    component:addStock    
  },
  {
    path:"/detail/:id",
    component:detail,
    name:"detail",
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
