<template>
  <div id="app"  class="container mx-auto py-20">
    <div class="p-5 shadow-md bg-teal-400 text-center text-white mb-5 rounded-sm">
        <h1>Noted TodoList</h1>
    </div>
    <Todo/>
  </div>
</template>

<script>
import Todo from './components/Todo.vue'

export default {
  name: 'app',
  components: {
    Todo
  }
}
</script>
