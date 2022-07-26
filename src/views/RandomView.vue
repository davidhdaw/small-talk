<script setup>
import { ref } from "vue"
  import BoosterCard from "../components/BoosterCard.vue"

  const booster = ref(null)

  const getNewFact = () => {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then(response => response.json())
    .then(data => {
      const newBooster = {
        text: data.text,
        id: Date.now(),
        type: "fact",
        isFavorited: false,
      }
      return booster.value = newBooster;
      })
  }

  const getNewDrink = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(response => {
      console.log(response)
      return response.json()
      })
    .then(data => {
      const ingredients = [];
      for (let i = 1; i < 16; i++) {
        if (data.drinks[0][`strIngredient${i}`]) {
          const ingredient = data.drinks[0][`strMeasure${i}`] + " " + data.drinks[0][`strIngredient${i}`]
          ingredients.push(ingredient)
        }
      }
      console.log(ingredients)
      const newBooster = {
        title: data.drinks[0].strDrink,
        preparation: data.drinks[0].strInstructions,
        id:Date.now(),
        type:"drink"
      }
      return booster.value = newBooster;
  })
      // const newBooster = {
      //   text: data.text,
      //   id: Date.now(),
      //   type: "fact",
      //   isFavorited: false,
      // }
      // return booster.value = newBooster;
      // })
  }
</script>

<template>
  <div class="random">
    <div class="button-container">
      <button @click="getNewFact">Give me a new fact</button>
      <button>Give me a new song</button>
      <button @click="getNewDrink">Give me a new drink</button>
    </div>
    <BoosterCard v-if= "booster" 
      :isFavorited="booster.isFavorited" 
      :text="booster.text" 
      :type="booster.type"
      :card="booster"/>
  </div>
</template>
<style scoped>

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
