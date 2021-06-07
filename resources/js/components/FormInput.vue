<template>
    <div class="form-input">
        <label :for="name"
               class="block text-sm font-medium text-gray-700"
        >
            {{ label }}
        </label>
        <div class="mt-1 input">
            <slot/>
        </div>
    </div>
</template>

<style lang="scss">
.form-input {
    .input > * {
        @apply appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400;
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
