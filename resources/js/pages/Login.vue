<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
            </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form class="space-y-6"
                      @submit.prevent="submitForm"
                >
                    <FormInput label="Email address"
                               name="email"
                    >
                        <input id="email"
                               v-model="formData.email"
                               autocomplete="email"
                               name="email"
                               required
                               type="email"
                        />
                    </FormInput>

                    <div>
                        <label class="block text-sm font-medium text-gray-700"
                               for="password"
                        >
                            Password
                        </label>
                        <div class="mt-1">
                            <input id="password"
                                   v-model="formData.password"
                                   autocomplete="current-password"
                                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                   name="password"
                                   required
                                   type="password"
                            >
                        </div>
                    </div>

                    <div>
                        <button class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                type="submit"
                                @click="submitForm"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            errors   : {},
            formData : {
                email    : '',
                password : ''
            }
        }
    },
    methods : {
        submitForm() {
            axios.post('/api/auth/login', this.formData).then(res => {
                this.setUser(res.data.user);
                this.setAccessToken(res.data.access_token);
            }).catch(err => {
                if (err.response.status === 422) this.errors = err.response.data.errors;
                else alert(JSON.stringify(err));
            });
        }
    }
}
</script>
