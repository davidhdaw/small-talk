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
</style>
