<template>
  <div class="container mx-auto py-20">
      <div class="p-5 shadow-md bg-teal-400 text-center text-white mb-5">
          <h1>Noted</h1>
      </div>

      <div class="p-10 shadow-md bg-white">
        <div class="flex mb-5">
            <div class="w-2/3">
                <button class="mr-3 btn-primary">Add Task</button>
                <button class="mr-3 btn-disabled">Delete Selected</button>
                <button class="mr-3 btn-delete">Delete Selected</button>
            </div>
            <div class="w-1/3">
                <input type="text" class="">
            </div>
        </div>

        <ol>
            <li v-for="list in lists" :key="list.id">
                <h3>{{ list.title }}</h3>
                <p>{{ list.content }}</p>
            </li>
        </ol>
      </div>
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
    // this.load()
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