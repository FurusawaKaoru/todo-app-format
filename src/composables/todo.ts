import {
  ref,
  reactive,
  provide,
  inject,
  Ref,
  InjectionKey,
} from 'vue'

export type Todo = {
  id: number
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
  const createTodoId = () => {
    return Math.floor( Math.random() * 110 )
  }
  const createTodo = (id: number, title: string) => {
    const todo: Todo = reactive<Todo>({
      id,
      title,
      visible: false,
      click: () => (todo.visible = true)
    })
    todos.value.push(todo)
    return todo
  }
  return { createTodoId, createTodo }
}

export const useFindTodo = () => {
  const todos = inject(Todos)
  if (todos === undefined) {
    throw new Error()
  }
  const findTodo = (id: number) =>  {
    const todo = todos.value.find(v => v.id === id)
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
  }
  return { updateTodo }
}
