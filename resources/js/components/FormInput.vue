<template>
    <div class="form-input">
        <label :for="name"
               class="label"
        >
            {{ label }}
        </label>
        <div :class="{ 'has-error': errors && errors.hasOwnProperty(name) }"
             class="input"
        >
            <div class="mt-1 relative rounded-md shadow-sm">
                <slot/>
                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg v-if="errors && errors.hasOwnProperty(name)"
                         aria-hidden="true"
                         class="h-5 w-5 text-red-500"
                         fill="currentColor"
                         viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <path clip-rule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              fill-rule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <p v-if="errors && errors.hasOwnProperty(name)"
               :id="name + '-error'"
               class="mt-2 text-sm text-red-600"
            >
                {{ errors[name][0] }}
            </p>
        </div>
    </div>
</template>

<style lang="scss">
.form-input {
    .label {
        @apply block text-sm font-medium text-gray-700;
    }

    .input {
        @apply mt-1;
    }

    input, textarea {
        @apply appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400;
    }

    .has-error input {
        @apply border-red-600;
    }
}
</style>

<script>
export default {
    props : {
        name   : {
            required : true,
            type     : String
        },
        label  : {
            required : true,
            type     : String
        },
        errors : {
            required : false,
            type     : Object
        }
    }
}
</script>
