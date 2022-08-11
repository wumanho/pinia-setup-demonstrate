<template>
  <li>
    {{ item.name }}
    <button @click="removeTodoItem(item)">完成</button>
  </li>
</template>

<script setup lang="ts">
import {useTodoStore} from "../stores";
import {TodoItem} from "../stores";

const todoStore = useTodoStore()
const {removeTodoItem} = todoStore
defineProps<{ item: TodoItem }>()

</script>
