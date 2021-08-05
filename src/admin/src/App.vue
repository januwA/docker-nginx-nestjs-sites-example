<template>
  <div>
    <ul>
      <li v-for="todo of todos" :key="todo._id">
        {{ todo.data }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  data() {
    return {
      todos: [] as { _id: string; data: string }[],
    };
  },
  async mounted() {
    const r = await fetch("/api/todos").then((e) => e.json());
    this.todos = r.data;
  },
});
</script>
