<script setup>
import { ref } from "vue"
import { useBoosterStore } from '../stores/boosterStore';
import BoosterCard from "../components/BoosterCard.vue"
import { storeToRefs } from 'pinia'
import DrinkBoosterCard from "../components/DrinkBoosterCard.vue"
const { boosters } = storeToRefs(useBoosterStore())
const { favoritedFacts, favoritedDrinks } = useBoosterStore()

const savedMode = ref('facts');


</script>

<template>
  <div class="saved">
    <div class="button-container">
      <button @click="savedMode = 'facts'">Saved facts</button>
      <button @click="savedMode = 'songs'">Saved Songs</button>
      <button @click="savedMode = 'drinks'">Saved drinks</button>
    </div>
    <div class="fact-container booster-container" 
      v-if="savedMode === 'facts'"
      v-for="fact in favoritedFacts">
        <BoosterCard 
            :isFavorited="fact.isFavorited" 
            :text="fact.text" 
            :type="fact.type"
            :booster="fact" />
    </div>
    <div class="drink-container booster-container"
    v-if="savedMode === 'drinks'"
      v-for="drink in favoritedDrinks">
      <DrinkBoosterCard 
      :title="drink.title"
      :type="drink.type"
      :preparation="drink.preparation"
      :ingredients="drink.ingredients"
      :isFavorited="drink.isFavorited"
      :booster="drink"
    />
    </div>
  </div>
</template>

<style scoped>

button {
  background-color: #E0676D;
  font-family: 'Arial Black', 'Arial Bold', Gadget, sans-serif;
  color: white;
  -webkit-text-stroke: 0.05rem black;
  font-size: 1.4rem;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.7rem;
  border: 0.2rem solid black;
  box-shadow: 0.3rem 0.3rem #000000;
}

button:hover {
  background-color: rgba(36, 123, 160, 1);
  cursor: pointer;
}

.saved {
  margin: 1rem;
}
</style>
