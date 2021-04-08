<template>
  <h1 class="text-left text-xl font-bold">TODO一覧</h1>
  <div class="mt-5">
    <router-link :to="{ name: 'create' }">
      <button class="primary-btn">
        新規作成
      </button>
    </router-link>
  </div>
  <table class="mt-5 table-fixed">
    <tr>
      <th class="w-1/5 px-4 py-2">No</th>
      <th class="w-2/5 px-4 py-2">Title</th>
      <th class="w-1/5 px-4 py-2">締め切り</th>
      <th class="w-1/5 px-4 py-2">お気に入り</th>
      <th class="w-1/5 px-4 py-2" />
    </tr>
    <tr v-for="todo in todos" :key="todo.id">
      <td class="border px-4 py-2">
        {{ todo.id }}
      </td>
      <td class="border px-4 py-2">
        {{ todo.title }}
      </td>
      <td class="border px-4 py-2">
        {{ todo.deadline }}
      </td>
      <td class="border px-4 py-2">
        {{ todo.favorite }}
      </td>
      <td class="border px-4 py-2">
        <router-link :to="{ name: 'edit', params: { id: todo.id }}">
          <button class="secondary-btn">
            編集
          </button>
        </router-link>
        <button
          class="danger-btn"
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

<style scoped>
.primary-btn {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
}

.secondary-btn {
  @apply bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded
}

.danger-btn {
  @apply bg-red-500 hover:bg-red-700 text-white font-bold ml-2 py-2 px-4 rounded
}

</style>
