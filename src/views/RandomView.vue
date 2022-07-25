<script setup>
import { ref } from "vue"
  import BoosterCard from "../components/BoosterCard.vue"
  const booster = ref(null)
  const getNewFact = () => {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return booster.value = data
      })
  }
</script>

<template>
  <div class="random">
    <h1>Generate Random Boosters</h1>
    <div class="button-container">
      <button @click="getNewFact">Give me a new fact</button>
      <button>Give me a new song</button>
      <button>Give me a new drink</button>
    </div>
    <BoosterCard v-if= "booster" :text="booster.text" />
  </div>
</template>
<style>

</style>
