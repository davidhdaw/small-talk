import { defineStore } from 'pinia'

export const useBoosterStore = defineStore({
  id: 'boosters',
  state: () => ({
    boosters: [],
  }),
  getters: {
    favoritedFacts: (state) => {
      return state.boosters.filter(booster => booster.type === "fact")
    },
    favoritedDrinks: (state) => {
      return state.boosters.filter(booster => booster.type === "drink")
    },
    favoritedJokes: (state) => {
      return state.boosters.filter(booster => booster.type === "joke")
    }
  }, 
  actions: {
    favoriteBooster(booster){
      console.log(booster)
      booster.isFavorited = true
      this.boosters.push(booster)
      const boosterAsString = JSON.stringify(booster)
      localStorage.setItem(booster.id, boosterAsString)
    },
    deleteBooster(deletedBooster){
      deletedBooster.isFavorited = false
      localStorage.removeItem(deletedBooster.id)
      this.boosters = this.boosters.filter(booster => booster.id !== deletedBooster.id)  
    },
    loadFromStorage(){
      this.boosters = Object.values(localStorage).map(object => JSON.parse(object))
      this.boosters.sort((a,b) => a.id - b.id)
    }
  }
})