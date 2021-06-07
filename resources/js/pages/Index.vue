<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div>
                    <h1 class="text-xl">Welcome guest,</h1>
                    <p>What do you want to do?</p>
                </div>
                <div class="flex space-x-3 mt-6">
                    <router-link :to="{ name: 'login' }"
                                 class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                 tag="button"
                                 type="button"
                    >
                        Sign in
                    </router-link>
                    <router-link :to="{ name: 'register' }"
                                 class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                 tag="button"
                                 type="button"
                    >
                        Create an account
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
