<script setup>
  import defaultAudio from "../assets/cropped-audio.mp3";
  import { ref } from "vue";
  import BoosterCard from "../components/BoosterCard.vue";
  import DrinkBoosterCard from "../components/DrinkBoosterCard.vue";
  import getData from "../apiCalls"
  const booster = ref(null);
  const notificationSound = new Audio(defaultAudio);
  const error = ref("")

  const getNewFact = () => {
    error.value = ""
    getData("https://uselessfacts.jsph.pl/random.json?language=en")
    .then(data => {
      const newBooster = {
        text: data.text,
        id: Date.now(),
        type: "fact",
        isFavorited: false
      }
      return booster.value = newBooster;
    })
    .catch(err => error.value = err);
  };

  const getNewJoke = () => {
    error.value = ""
    getData("https://icanhazdadjoke.com/", {
      headers: {
        "accept": "application/json"
      }
    })
      .then(data => {
        const newBooster = {
        text: data.joke,
        id: Date.now(),
        type: "joke",
        isFavorited: false
        }
        return booster.value = newBooster;
    })
    .catch(err => error.value = err);
  };

  const getNewDrink = () => {
    error.value = ""
    getData("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(data => {
      const ingredientsList = [];
      for (let i = 1; i < 16; i++) {
        if (data.drinks[0][`strIngredient${i}`]) {
          if (!data.drinks[0][`strMeasure${i}`]) {
            const ingredient = data.drinks[0][`strIngredient${i}`]
            ingredientsList.push(ingredient)
          } else {
            const ingredient = data.drinks[0][`strMeasure${i}`] + " " + data.drinks[0][`strIngredient${i}`]
            ingredientsList.push(ingredient)
          }
        }
      }
      const newBooster = {
        title: data.drinks[0].strDrink,
        preparation: data.drinks[0].strInstructions,
        ingredients: ingredientsList,
        id:Date.now(),
        type:"drink",
        isFavorited:false
      }
      return booster.value = newBooster;
    })
    .catch(err => error.value = err);
  };

  const getNewExcuse = () => {
    error.value = ""
    getData("https://arcane-hollows-12884.herokuapp.com/http://www.boredapi.com/api/activity")
    .then(data => {
      const intros = ["I'm sorry I have to ", "Drat. I just rememberd I was going to ", "Gotta go I need to ", "Can we talk later I have to ", "Sorry I promised a friend I'd "]
      const randomIndex = Math.floor(Math.random() * intros.length);
      const excuse = intros[randomIndex] + data.activity.toLowerCase().replaceAll("you're", "I'm").replaceAll('your', 'my').replaceAll('you', 'I') + "."
      const newBooster = {
        text: excuse,
        id: Date.now(),
        type: "excuse",
        isFavorited: false
      }
      notificationSound.play();
      return booster.value = newBooster;
    })
    .catch(err => error.value = err);
  };
</script>

<template>
  <div class="random">
    <div class="button-container">
      <button @click="getNewFact">Give me a new fact</button>
      <button @click="getNewJoke">Give me a new joke</button>
      <button @click="getNewDrink">Give me a new drink</button>
    </div>
    <div v-if="error" class="error">Uh Oh, something went wrong!</div>
    <div class="booster-container">
      <BoosterCard v-if= "booster && booster.type ==='fact'" 
        :isFavorited="booster.isFavorited" 
        :text="booster.text" 
        :type="booster.type"
        :booster="booster"
      />
      <DrinkBoosterCard v-if= "booster && booster.type ==='drink'"
        :title="booster.title"
        :type="booster.type"
        :preparation="booster.preparation"
        :ingredients="booster.ingredients"
        :isFavorited="booster.isFavorited"
        :booster="booster"
      />
      <BoosterCard v-if= "booster && booster.type ==='joke'" 
        :isFavorited="booster.isFavorited" 
        :text="booster.text" 
        :type="booster.type"
        :booster="booster"
      />
    </div>
    <div class="excuse-container">
      <button class="excuse-button" 
        @click="getNewExcuse">
        I gotta get out of here!
        </button>
      <BoosterCard v-if= "booster && booster.type ==='excuse'" 
        :isFavorited="booster.isFavorited" 
        :text="booster.text" 
        :type="booster.type"
        :booster="booster"
      />
    </div>
    
  </div>
</template>
<style scoped>
  .excuse-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .random {
    margin: 1rem;
  }

  button {
    background-color: #E0676D;
    font-family: "Arial Black", "Arial Bold", Gadget, sans-serif;
    color: white;
    -webkit-text-stroke: 0.05rem black;
    font-size: 1.4rem;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0.7rem;
    border: 0.2rem solid black;
    box-shadow: 0.3rem 0.3rem #000000;
    transition: 0.4s;
  }

  .excuse-button {
    background-color:#d0121b;
  }
  .booster-container {
    display: flex;
    justify-content: center;
  }

  button:hover {
    background-color: rgba(36, 123, 160, 1);
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    button {
      font-size: 1.2rem;
    }
  }
</style>
