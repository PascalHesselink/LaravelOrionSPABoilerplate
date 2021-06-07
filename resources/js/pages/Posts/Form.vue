<template>
    <div v-if="$route.name.includes('.create') || formDataItem"
         class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                <span v-if="$route.name.includes('.create') || $route.name.includes('.duplicate')">Create new post</span>
                <span v-if="$route.name.includes('.edit')">Edit post</span>
            </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form class="space-y-6"
                      @submit.prevent="submitForm"
                >
                    <FormInput :errors="errors"
                               label="Title"
                               name="title"
                    >
                        <input id="title"
                               v-model="formData.title"
                               autocomplete="title"
                               name="title"
                               required
                               type="text"
                        />
                    </FormInput>

                    <FormInput :errors="errors"
                               label="Body"
                               name="body"
                    >
                        <textarea id="body"
                                  v-model="formData.body"
                                  autocomplete="body"
                                  class="resize-none"
                                  name="body"
                                  required
                                  rows="6"
                        />
                    </FormInput>

                    <div class="flex space-x-3">
                        <FormButton status="default">
                            <router-link :to="{ name: 'posts.index' }"
                                         tag="button"
                                         type="button"
                            >
                                Cancel
                            </router-link>
                        </FormButton>
                        <FormButton status="success">
                            <button type="submit">
                                <span v-if="$route.name.includes('.create') || $route.name.includes('.duplicate')">Create</span>
                                <span v-if="$route.name.includes('.edit')">Save</span>
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
            errors       : {},
            formDataItem : null,
            formData     : {
                title : '',
                body  : ''
            }
        }
    },
    created() {
        if (['posts.edit', 'posts.duplicate'].includes(this.$route.name)) {
            axios.get('/api/posts/' + this.$route.params.id).then(res => {
                this.formDataItem = res.data.data;
            }).catch(err => {
                alert(JSON.stringify(err));
            });
        }
    },
    methods : {
        submitForm() {
            let request;
            switch (this.$route.name) {
                case 'posts.create':
                case 'posts.duplicate':
                    request = axios.post('/api/posts', this.formData);
                    break;
                case 'posts.edit':
                    request = axios.put('/api/posts/' + this.$route.params.id, this.formData);
                    break;
            }

            request.then(res => {
                this.$router.push({
                    name : 'posts.index'
                });
            }).catch(err => {
                if (err.response.status === 422) this.errors = err.response.data.errors;
                else alert(JSON.stringify(err));
            });
        }
    },
    watch   : {
        formDataItem : {
            handler(newVal) {
                let target = JSON.parse(JSON.stringify(newVal));

                this.formData.title = target.title;
                this.formData.body  = target.body;
            }
        }
    }
}
</script>
