<template>
    <div :class="status"
         class="form-button"
    >
        <slot/>
    </div>
</template>

<script>
export default {
    props : {
        status : {
            type     : String,
            required : false,
            default  : 'default'
        }
    }
}
</script>

<style lang="scss">
.form-button {
    @apply w-full;

    button {
        @apply w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white overflow-hidden transition duration-300;
    }
}

/**
    Apply the different status colors
 */
.form-button.default button {
    @apply bg-white hover:bg-gray-200 text-black border-gray-300;
}

.form-button.info button {
    @apply bg-indigo-500 hover:bg-indigo-600;
}

.form-button.danger button {
    @apply bg-red-500 hover:bg-red-600;
}

.form-button.success button {
    @apply bg-green-500 hover:bg-green-600;
}
</style>
