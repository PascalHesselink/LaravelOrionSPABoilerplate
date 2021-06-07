<template>
    <div class="h-screen flex flex-col">
        <nav v-if="$store.getters.getUser"
             class="bg-white shadow relative flex flex-shrink-0"
        >
            <div class="container mx-auto">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="hidden md:ml-6 md:flex md:space-x-8">
                            <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
                            <router-link :to="{ name: 'index' }"
                                         class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                         exact-active-class="border-indigo-500"
                                         tag="a"
                            >
                                Home
                            </router-link>
                            <router-link :to="{ name: 'posts.index' }"
                                         class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                         exact-active-class="border-indigo-500"
                                         tag="a"
                            >
                                My posts
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <main class="flex flex-col flex-1 overflow-y-auto">
            <router-view/>
        </main>
    </div>
</template>
