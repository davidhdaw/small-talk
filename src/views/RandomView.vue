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
    <div class="button-container">
      <button @click="getNewFact">Give me a new fact</button>
      <button>Give me a new song</button>
      <button>Give me a new drink</button>
    </div>
    <BoosterCard v-if= "booster" :text="booster.text" />
  </div>
</template>
<style>

.random {
  margin: 1rem;
}
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

</style>
