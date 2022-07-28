<script setup>
import { defineProps } from "vue"
import { storeToRefs } from 'pinia'
import { useBoosterStore } from '../stores/boosterStore';

const { favoriteBooster, deleteBooster } = useBoosterStore()

    const props = defineProps({
        title: String,
        type: String,
        preparation: String,
        ingredients: Array,
        isFavorited: Boolean,
        booster: Object
        })
</script>

<template>
    <div class="booster-card">
        <div class="card-header">
            <h3>{{ type }}.</h3>
            <p v-if="!booster.isFavorited"
            @click="favoriteBooster(booster)" class="unfilled-favorite-star star">☆</p>
            <p v-if="booster.isFavorited" 
            @click="deleteBooster(booster)"
            class="filled-favorite-star star">★</p>
        </div>
        <div class="card-text">
            <h4 class="drink-title">{{title}}</h4>
            <ul>
                <li v-for="ingredient in ingredients">
                    {{ingredient}}
                </li>
            </ul>
            <p class="preparation">{{ preparation }}</p>
        </div>
    </div>
</template>

<style scoped>
h4 {
    margin: 0px;
}
.star {
    font-size: 20px;
}
.filled-favorite-star {
    color:#E0676D;
}
.booster-card {
    background-color: #1F487E;
    height: 15rem;
    width: 13rem;
    border-radius: 0.5rem;
    border: 0.2rem solid black;
    box-shadow: 0.3rem 0.3rem #000000;
    margin: 1.2rem;
}

.drink-title {
    font-size: 1rem;
    text-decoration:underline;
}
.card-text {
    height: 11rem;
    overflow: scroll;
    word-break: break-word;
    margin: 0.3rem;
}

*::-webkit-scrollbar {
  width: 0.5rem;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #E0676D;
  border-radius: 20px;
}

*::-webkit-scrollbar-corner {
    background: transparent;
    }

.card-header {
    display: flex;
    justify-content: flex-end;
    margin: 1.5rem;
    margin-bottom: 0px;
    margin-top: 0.3rem;
}

h3 {
    font-size: 1.3rem;
    margin-right: 2.5rem;
    margin-bottom: 0px;
}

.favorite-star {
    font-size: 1.2rem;
    margin: 0px;
    margin-top: 1.2rem
}
</style>
