<template>
  <h1 class="text-left text-xl font-bold">TODO一覧</h1>
  <div class="mt-5">
    <router-link :to="{ name: 'create' }">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        新規作成
      </button>
    </router-link>
  </div>
  <table class="mt-5 table-fixed">
    <tr>
      <th class="w-1/4 px-4 py-2">No</th>
      <th class="w-2/4 px-4 py-2">Title</th>
      <th class="w-1/4 px-4 py-2" />
    </tr>
    <tr v-for="todo in todos" :key="todo.id">
      <td class="border px-4 py-2">
        {{ todo.id }}
      </td>
      <td class="border px-4 py-2">
        {{ todo.title }}
      </td>
      <td class="border px-4 py-2">
        <router-link :to="{ name: 'edit', params: { id: todo.id }}">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            編集
          </button>
        </router-link>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="deleteTodo(todo.id)"
        >
          削除
        </button>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTodos, useDeleteTodo } from '~/composables/todo'

export default defineComponent({
  setup() {
    const { todos } = useTodos()
    const { deleteTodo } = useDeleteTodo()
    
    return { todos, deleteTodo }
  },
})
</script>

<style scoped></style>
