<template>
  <div class="container mx-auto">
    <RouterView />
  </div>
</template>

<script>
import { defineComponent, ref, provide } from 'vue'
import { useProvideTodos } from '~/composables/todo'

export default defineComponent({
  setup() {
    const { provideTodos } = useProvideTodos()
    provideTodos()
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
