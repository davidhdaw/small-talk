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
    favoritedSongs: (state) => {
      return state.boosters.filter(booster => booster.type === "song")
    }
  }, 
  actions: {
    favoriteBooster(booster){
      booster.isFavorited = true;
      this.boosters.push(booster)
      console.log(this.boosters)
    }
  }
})