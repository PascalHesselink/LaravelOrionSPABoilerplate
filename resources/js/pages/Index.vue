<template>
    <div class="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div>
                    <h1 class="text-xl">Welcome {{ $store.getters.getUser.name || 'guest' }},</h1>
                    <p>What do you want to do?</p>
                </div>

                <div class="flex space-x-3 mt-6">
                    <template v-if="!$store.getters.getUser">
                        <FormButton status="info">
                            <router-link :to="{ name: 'login' }"
                                         tag="button"
                                         type="button"
                            >
                                Sign in
                            </router-link>
                        </FormButton>
                        <FormButton status="info">
                            <router-link :to="{ name: 'register' }"
                                         tag="button"
                                         type="button"
                            >
                                Create an account
                            </router-link>
                        </FormButton>
                    </template>
                    <template v-if="$store.getters.getUser">
                        <FormButton status="info">
                            <router-link :to="{ name: 'posts.index' }"
                                         tag="button"
                                         type="button"
                            >
                                View my posts
                            </router-link>
                        </FormButton>
                        <FormButton status="danger">
                            <button
                                    type="button"
                                    @click="$store.dispatch('clearSession')"
                            >
                                Logout
                            </button>
                        </FormButton>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
