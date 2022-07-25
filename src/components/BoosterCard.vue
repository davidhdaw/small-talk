<script setup>
    import { defineProps } from "vue"
    const props = defineProps({
        text: String,
        type: String
        })
</script>

<template>
    <div class="booster-card">
        <h3>{{text}}</h3>
    </div>
</template>

<style scoped>
.booster-card {
    background-color: #1F487E;
    height: 15rem;
    width: 13rem;
}
</style>
