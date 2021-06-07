<template>
    <div v-if="$store.getters.getPosts"
         class="flex-1 flex flex-col justify-start py-12 sm:px-6 lg:px-8"
    >
        <div class="w-full">
            <div class="container mx-auto">
                <div class="mb-4">
                    <h1 class="text-xl">Posts</h1>
                </div>
                <div>
                    <div class="flex flex-col shadow rounded-md">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table class="min-w-full divide-y divide-gray-200">
                                        <thead class="bg-gray-50">
                                        <tr>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                scope="col"
                                            >
                                                #
                                            </th>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                scope="col"
                                            >
                                                Title
                                            </th>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                scope="col"
                                            >
                                                Body
                                            </th>
                                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                scope="col"
                                            >
                                                Created at
                                            </th>
                                            <th class="relative px-6 py-3"
                                                scope="col"
                                            >
                                                <span class="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="item in $store.getters.getPosts"
                                            class="bg-white"
                                        >
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {{ item.id }}
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {{ item.title }}
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {{ item.body }}
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {{ item.created_at }}
                                            </td>
                                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a class="text-indigo-600 hover:text-indigo-900"
                                                   href="#"
                                                >Edit
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('fetchPosts');
    }
}
</script>
