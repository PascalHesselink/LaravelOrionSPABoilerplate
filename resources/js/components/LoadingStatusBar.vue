<template>
    <div v-if="isAxiosLoading"
         :class="{ '-mt-2': !isAxiosLoading }"
         class="h-2 w-full absolute top-0 left-0 right-0 z-50 pointer-events-none -mr-32 overflow-hidden"
    >
        <div class="h-1 w-32 bg-indigo-500 -ml-32 absolute loading-item"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isAxiosLoading : false,
            loaderInterval : null
        }
    },
    created() {
        if (window.events) {
            window.events.$on('setPageLoading', (newVal) => {
                this.isAxiosLoading = newVal;
            })
        }
    }
}
</script>

<style lang="scss">
.loading-item {
    left                      : calc(100% + 8rem);
    animation-name            : leftToRight;
    animation-duration        : 2s;
    animation-iteration-count : infinite;
}

@keyframes leftToRight {
    0% {
        left : 0;
    }
    100% {
        right : 100%;
    }
}
</style>
