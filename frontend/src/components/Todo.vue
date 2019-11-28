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

                    <h2 class="accordion__header pt-4 pl-4">Header</h2>
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

        <section class="shadow">
            <article class="border-b">
                <div class="border-l-2 border-transparent">
                    <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
                        <span class="text-grey-darkest font-thin text-xl">
                            Massa vitae tortor condimentum lacinia quis vel eros donec
                        </span>
                        <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                            <!-- icon by feathericons.com -->
                            <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="6 9 12 15 18 9">
                                </polyline>
                            </svg>
                        </div>
                    </header>
                </div>
            </article>
            <article class="border-b">
                <div class="border-l-2 bg-grey-lightest border-indigo">
                    <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
                        <span class="text-indigo font-thin text-xl">
                            Lorem ipsum dolor sit amet
                        </span>
                        <div class="rounded-full border border border-indigo w-7 h-7 flex items-center justify-center bg-indigo">
                            <!-- icon by feathericons.com -->
                            <svg aria-hidden="true" data-reactid="281" fill="none" height="24" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="18 15 12 9 6 15">
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
            <article class="border-b">
                <div class="border-l-2 border-transparent">
                    <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
                        <span class="text-grey-darkest font-thin text-xl">
                            Lorem dolor sed viverra ipsum
                        </span>
                        <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                            <!-- icon by feathericons.com -->
                            <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="6 9 12 15 18 9">
                                </polyline>
                            </svg>
                        </div>
                    </header>
                </div>
            </article>
            <article class="border-b">
                <div class="border-l-2 border-transparent">
                    <header class="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none">
                        <span class="text-grey-darkest font-thin text-xl">
                            Egestas sed tempus urna
                        </span>
                        <div class="rounded-full border border-grey w-7 h-7 flex items-center justify-center">
                            <!-- icon by feathericons.com -->
                            <svg aria-hidden="true" class="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                <polyline points="6 9 12 15 18 9">
                                </polyline>
                            </svg>
                        </div>
                    </header>
                </div>
            </article>
        </section>

        <!-- <ol>
            <li v-for="list in lists" :key="list.id">
                <p>{{ list.content }}</p>

            </li>
        </ol> -->
    </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'HelloWorld',
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
      axios.get(`https://api.fadzarwahyu.net/api/v1/notes`)
        .then(response => {
          this.lists = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>