<template>
    <div class="px-10 py-8 shadow-md bg-white rounded-sm">
        <div class="flex mb-5">
            <div class="w-2/3">
                <button class="mr-3 btn-primary" @click="addTask = !addTask">Add Task</button>
                <button v-if="!deleteButton" class="mr-3 btn-disabled">Delete Selected</button>
                <button v-else class="mr-3 btn-delete">Delete Selected</button>
            </div>
            <div class="relative w-1/3">
                <input type="search" name="serch" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                    <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                    </svg>
                </button>
            </div>
        </div>

        <div v-if="addTask" class="flex mb-5">
            <div class="w-11/12">
                <input type="text" class="h-10 px-5 rounded text-sm">
            </div>
            <div class="w-1/12">
                <button class="btn-submit float-right">Submit</button>
            </div>
        </div>

        <hr class="mb-8">

        <div class="w-full">
            <ul>
                <li class="list-day">
                    <input type="checkbox" class="accordion-btn" checked>
                    <div class="flex">
                        <div class="accordion-arrow">
                            <svg width="1em" height="1em" fill="#000000" viewBox="0 0 100 100">
                                <polygon points="11.7984725 19 49.9935275 57.3950291 88.1885825 19 99.987055 30.7984725 49.9935275 80.792 0 30.7984725"></polygon>
                            </svg>
                        </div>

                        <h1>Today</h1>
                    </div>
                    <div class="accordion-body ml-8">
                        <div v-for="list in lists" :key="list.id" class="flex mb-3">
                            <div class="w-8/12">
                                <div>
                                    <input type="checkbox" class="form-checkbox">
                                    <span class="ml-2">{{ list.content}}</span>

                                </div>
                            </div>
                            <div class="w-4/12">
                                <div class="flex text-right">
                                    <div class="w-10/12">
                                        <span class="badge bg-blue-400 mr-2">{{ list.id }}</span>
                                        <span class="badge bg-pink-600 mr-2">{{ list.title }}</span>
                                        <span class="font-thin text-xs text-gray-700">{{ list.updated_at }}</span>
                                    </div>
                                    <div class="w-2/12">
                                        <button class="btn mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#00ccaa" viewBox="0 0 24 24">
                                                <path d="M14.078 7.061l2.861 2.862-10.799 10.798-3.584.723.724-3.585 10.798-10.798zm0-2.829l-12.64 12.64-1.438 7.128 7.127-1.438 12.642-12.64-5.691-5.69zm7.105 4.277l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z"/>
                                            </svg>
                                        </button>
                                        <button class="btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" viewBox="0 0 24 24">
                                                <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        </div>

                    </div>
                </li>
            </ul>
        </div>

        <div class="accordion">
        <!--  Panel 1  -->
            <section>
                <input type="checkbox" name="panel" id="panel-1" class="hidden">
                <label for="panel-1" class="text-indigo block font-thin text-xl">
                    Panel 1
                </label>
                <div class="accordion__content overflow-hidden bg-grey-lighter">

                    <div class="mt-2">
                        <div>
                            <input type="checkbox" class="form-checkbox" checked>
                            <span class="ml-2">Option 1</span>
                        </div>
                        <div>
                            <input type="checkbox" class="form-checkbox">
                            <span class="ml-2">Option 2</span>
                        </div>
                        <div>
                            <input type="checkbox" class="form-checkbox">
                            <span class="ml-2">Option 3</span>
                        </div>
                    </div>

                    <h1 class="accordion__header pt-4 pl-4">Header</h1>
                    <p class="accordion__body p-4" id="panel1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Lorem ipsum dolor sit amet.</p>
                </div>



    <article class="border-b">
        <div class="border-l-2 bg-grey-lightest border-indigo">
            <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
                <span class="text-indigo font-thin text-xl">
                    Lorem ipsum dolor sit amet
                </span>
                <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                    <!-- icon by feathericons.com -->
                    <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="6 9 12 15 18 9">
                        </polyline>
                    </svg>
                </div>
            </header>
            <div>
                <div class="pl-8 pr-8 pb-5 text-grey-darkest">
                    <ul class="pl-4">
                        <li class="pb-2">
                            consectetur adipiscing elit
                        </li>
                        <li class="pb-2">
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </li>
                        <li class="pb-2">
                            Viverra orci sagittis eu volutpat odio facilisis mauris
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </article>



            </section>
            <!-- Panel 2 -->
            <section>
                <input type="checkbox" name="panel" id="panel-2" class="hidden">
                <label for="panel-2" class="relative block bg-black text-white p-4 shadow border-b border-grey">Panel 2</label>
                <div class="accordion__content overflow-hidden bg-grey-lighter">
                <h2 class="accordion__header pt-4 pl-4">Header</h2>
                <p class="accordion__body p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Lorem ipsum dolor sit amet.</p>
                </div>
            </section>
            <!--  Panel 3  -->
            <section>
                <input type="checkbox" name="panel" id="panel-3" class="hidden">
                <label for="panel-3" class="relative block bg-black text-white p-4 shadow border-b border-grey">Panel 3</label>
                <div class="accordion__content overflow-hidden bg-grey-lighter">
                <h2 class="accordion__header pt-4 pl-4">Header</h2>
                <p class="accordion__body p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Lorem ipsum dolor sit amet.</p>
                </div>
            </section>
        </div>

        <!-- <ol>
            <li v-for="list in lists" :key="list.id">
                <p>{{ list.content }}</p>

            </li>
        </ol> -->
    </div>
</template>

<script>
import axios from "axios"
// import Trash from './components/Trash.vue'

const baseURL = `https://api.fadzarwahyu.net/api/v1/notes`

export default {
  name: 'HelloWorld',
//   components:
    // Trash
//   ,
  data() {
    return {
      lists: [],
      errors: [],
      deleteButton: true,
      addTask: false
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      axios.get(baseURL)
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

<style  scoped>

.accordion-btn {
  position: absolute;
  cursor: pointer;
  width: 60%;
  height: 35px;
  z-index: 1;
  opacity: 0;
  /* margin-top: 22px; */
}

.accordion-btn[type=checkbox]:checked ~ .accordion-body {
  margin-top: 0;
  max-height: 0;
  opacity: 0;
  /* tras */
}

ul li input[type=checkbox]:checked ~ .accordion-arrow {
  transform: rotate(180deg);
  /* tras */
}
</style>