import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/listArticle.vue'
import ListArticle from '../views/listArticle.vue'
import createArticle from '../views/createArticle.vue'
import editArticle from '../views/editArticle.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: "/articles/index"
  },
  {
    path: '/articles/index',
    name: 'index',
    component: ListArticle
  },
  {
    path: '/articles/create',
    name: 'create',
    component: createArticle
  },
  {
    path: '/articles/:id/edit',
    name: 'edit',
    component: editArticle
  }
]

const router = new VueRouter({
  routes
})

export default router
