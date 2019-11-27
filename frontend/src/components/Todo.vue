<template>
  <div class="hello">
    <!-- <h1>{{ lists }}</h1> -->
    <ol class="list-decimal">
      <li v-for="list in lists" :key="list.id">
        <h3>{{ list.title }}</h3>
        <p>{{ list.content }}</p>
      </li>
    </ol>
    <h1>{{ errors }}</h1>
  </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'HelloWorld',
  data() {
    return {
      lists: [],
      errors: []
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      axios.get(`https://api.fadzarwahyu.net/api/v1/notes`)
        .then(response => {
          this.lists = response.data.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>