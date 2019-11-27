<template>
  <div class="hello">
    <ol>
      <li v-for="list in lists" :key="list.id">
        <h3>{{ list.title }}</h3>
        <p>{{ list.content }}</p>
      </li>
    </ol>
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