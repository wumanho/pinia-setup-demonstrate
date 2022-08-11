<template>
  <div>
    <input type="text" v-model="newTodoName"/>
    <button @click="addTodoItem">添加</button>
    <ul>
      <TodoItem v-for="(todo) in todoItems" :key="todo.name" :item="todo"/>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useTodoStore} from "../stores";
import {toRefs} from "vue";
import TodoItem from './TodoItem.vue'

const todoStore = useTodoStore()
const {newTodoName, todoItems} = toRefs(todoStore)
const {addTodoItem} = todoStore

</script>
