import {
  ref,
  reactive,
  provide,
  inject,
  Ref,
  InjectionKey,
} from 'vue'

export type Todo = {
  id: string
  title: string
  visible: boolean
  click: () => void
}

const Todos: InjectionKey<Ref<Todo[]>> = Symbol()

export const useProvideTodos = () => {
  const provideTodos = () => {
    const todos = ref<Todo[]>([])
    provide(Todos, todos)
  }
  return { provideTodos }
}

export const useTodos = () => {
  const todos = inject(Todos)
  if (todos === undefined) {
    throw new Error()
  }
  return {
    todos
  }
}

export const useCreateTodo = () => {
  const todos = inject(Todos)
  if (todos === undefined) {
    throw new Error()
  }
  const createTodo = (id: string, title: string) => {
    const todo: Todo = reactive<Todo>({
      id,
      title,
      visible: false,
      click: () => (todo.visible = true)
    })
    todos.value.push(todo)
    return todo
  }
  return { createTodo }
}

export const useFindTodo = () => {
  const todos = inject(Todos)
  if (todos === undefined) {
    throw new Error()
  }
  const findTodo = (id: string) =>  {
    const todo = todos.value.find(v => v.id === id)
    if (todo === undefined) {
      throw new Error()
    }
    return todo
  }
  return { findTodo }
}

export const useUpdateTodo = () => {
  const todos = inject(Todos)
  if (todos === undefined) {
    throw new Error()
  }
  const updateTodo = (todo: Todo) => {
    const dirtyTodos = todos.value.map(v => {
      if (v.id === todo.id) return todo
      return v
    })
    todos.value = dirtyTodos
  }
  return { updateTodo }
}

export const useDeleteTodo = () => {
  const todos = inject(Todos)
  if (todos === undefined) {
    throw new Error()
  }
  const deleteTodo = (id: string) => {
    const dirtyTodos = todos.value.filter(v => {
      return v.id !== id
    })
    todos.value = dirtyTodos
  }
  return { deleteTodo }
}
