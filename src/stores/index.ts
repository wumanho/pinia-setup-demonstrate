import {defineStore} from 'pinia'
import {ref} from "vue";

export interface TodoItem {
  id: number,
  name: string,
  description?: string,
  done: boolean
}

export const useTodoStore = defineStore('todo', () => {
  const newTodoName = ref('')
  const todoItems = ref<TodoItem[]>([])

  const addTodoItem = () => {
    todoItems.value.push({
      id: 2,
      name: newTodoName.value,
      done: false
    })
    // reset input value
    newTodoName.value = ''
  }

  const removeTodoItem = (removeItem: TodoItem) => {
    todoItems.value = todoItems.value.filter(item => {
      return item.name !== removeItem.name
    })
  }

  return {
    newTodoName,
    todoItems,
    addTodoItem,
    removeTodoItem
  }
})
