<template>
  <h1 class="text-left text-xl font-bold">新規作成</h1>
  <form
    id="todo"
    action="/"
    @submit.prevent="submit"
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mt-5"
  >
    <div class="flex">
      <label
        class="w-1/5 block text-gray-700 text-center text-sm font-bold mb-2"
        for="title"
      >
        タイトル
      </label>
      <input
        id="title"
        v-model="title"
        class="w-4/5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Title"
      >
    </div>
    <div class="flex">
      <label
        class="w-1/5 block text-gray-700 text-center text-sm font-bold mb-2"
        for="deadline"
      >
        締め切り
      </label>
      <input
        id="deadline"
        v-model="deadline"
        class="w-4/5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="date"
        placeholder="deadline"
      >
    </div>
    <div class="flex">
      <label
        class="w-1/5 block text-gray-700 text-center text-sm font-bold mb-2"
        for="deadline"
      >
        お気に入り
      </label>
      <input
        id="deadline"
        v-model="favorite"
        type="checkbox"
      >
    </div>

    <div class="text-center mt-5">
      <button
        class="primary-btn"
        type="submit"
        form="todo"
      >
        作成
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCreateTodo } from '~/composables/todo'

export default defineComponent({
  setup() {
    const router = useRouter()
    const { createTodo } = useCreateTodo()
    const id = ref<string>(Math.random().toString(36).slice(-8))
    const title = ref<string>('')
    const deadline = ref<Date>(new Date())
    const favorite = ref<boolean>(false)
    const submit = () => {
      createTodo(id.value, title.value, deadline.value, favorite.value)
      router.push('/')
    }
    return {
      id,
      title,
      deadline,
      favorite,
      submit
    }
  }
})
</script>

<style scoped>
.primary-btn {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
}
</style>
