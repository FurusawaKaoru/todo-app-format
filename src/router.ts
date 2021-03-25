import { createRouter, createWebHistory } from 'vue-router'
import Index from '~/pages/Index.vue'
import New from '~/pages/todo/New.vue'
import Edit from '~/pages/todo/Edit.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/todo/',
      name: 'new',
      component: New,
    },
    {
      path: '/todo/:id',
      name: 'edit',
      component: Edit,
    },
  ],
})
