<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Create an account
            </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form class="space-y-6"
                      @submit.prevent="submitForm"
                >
                    <FormInput :errors="errors"
                               label="Username"
                               name="name"
                    >
                        <input id="name"
                               v-model="formData.name"
                               autocomplete="username"
                               name="name"
                               required
                               type="text"
                        />
                    </FormInput>

                    <FormInput :errors="errors"
                               label="Email address"
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

                    <FormInput :errors="errors"
                               label="Password"
                               name="password"
                    >
                        <input id="password"
                               v-model="formData.password"
                               autocomplete="password"
                               name="password"
                               required
                               type="password"
                        />
                    </FormInput>

                    <FormInput :errors="errors"
                               label="Confirm password"
                               name="password_confirmation"
                    >
                        <input id="password_confirmation"
                               v-model="formData.password_confirmation"
                               autocomplete="password_confirmation"
                               name="password_confirmation"
                               required
                               type="password"
                        />
                    </FormInput>

                    <div class="flex space-x-3">
                        <FormButton status="default">
                            <router-link :to="{ name: 'index' }"
                                         tag="button"
                                         type="button"
                            >
                                Cancel
                            </router-link>
                        </FormButton>
                        <FormButton status="info">
                            <button type="submit"
                                    @click="submitForm"
                            >
                                Sign up
                            </button>
                        </FormButton>
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
                name                  : '',
                email                 : '',
                password              : '',
                password_confirmation : ''
            }
        }
    },
    methods : {
        submitForm() {
            axios.post('/api/auth/register', this.formData).then(res => {
                this.$store.commit('setUser', res.data.user);
                this.$store.commit('setAccessToken', res.data.access_token);

                this.$router.push({
                    name : 'index'
                });
            }).catch(err => {
                if (err.response.status === 422) this.errors = err.response.data.errors;
                else alert(JSON.stringify(err));
            });
        }
    }
}
</script>
