<template>
  <div id="app" class="bg-teal-100">
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
