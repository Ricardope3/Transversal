import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About.vue';
import Blogs from '@/components/Blogs';
import Eventos from '@/components/Eventos';
import Expertos from '@/components/Expertos';
import Home from '@/components/Home';
import MisionYVision from '@/components/MisionYVision';
import Proyectos from '@/components/Proyectos';
import Publicaciones from '@/components/Publicaciones';
import ThinkTanks from '@/components/ThinkTanks';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/about',
      component: About
    },
    {
      path: '/blogs',
      component: Blogs
    },
    {
      path: '/eventos',
      component: Eventos
    },
    {
      path: '/expertos',
      component: Expertos
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/misionYVision',
      component: MisionYVision
    },
    {
      path:'/proyectos',
      component : Proyectos
    },
    {
      path: '/publicaciones',
      component: Publicaciones
    },
    {
      path: '/thinkTanks',
      component : ThinkTanks
    },

  ],
})