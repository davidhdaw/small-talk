import { defineStore } from 'pinia'

export const useBoosterStore = defineStore({
  id: 'boosters',
  state: () => ({
    boosters: [],
  }),
  getters: {
    
  }, 
  actions: {
    favoriteBooster(booster){
      booster.isFavorited = true;
      this.boosters.push(booster)
      console.log(this.boosters)
    }
  }
})