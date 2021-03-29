import { createRouter, createWebHistory } from 'vue-router'
import Index from '~/pages/Index.vue'
import Create from '~/pages/todo/Create.vue'
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
      name: 'create',
      component: Create,
    },
    {
      path: '/todo/:id',
      name: 'edit',
      component: Edit,
    },
  ],
})
