<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import { useBoosterStore } from "./stores/boosterStore";
  const { loadFromStorage } = useBoosterStore();
  loadFromStorage();
</script>

<template>
  <header>
    <h1><span class="small">small</span><br/> TALK</h1>
    <p>a tool to boost your parties!</p>
    <div class="wrapper">
      <nav>
        <RouterLink 
          class="router-link" 
          to="/">Random Party Boosters
        </RouterLink>
        <RouterLink 
          class="router-link" 
          to="/saved">Saved Party Boosters
        </RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

  h1 {
    -webkit-text-stroke: 1px black;
    font-size: 40px;
    margin: 0px;
    text-shadow: 3px 3px #101010;
  }
  .small {
    font-size: 30px;
  }

  header {
    line-height: 1.5;
  }

  p {
    margin: 0px;
    -webkit-text-stroke: 0.05rem black;
    font-size: 1.2rem;
  }

  .router-link {
    margin: 1rem;
    font-size: 2rem;
    background-color: rgba(131, 145, 163, 0.7);
    box-shadow: 0.5rem 0.5rem #000000;
    border: 0.2rem solid black;
    padding: 0.5rem;
    border-radius: 1rem;
  }
  nav {
    width: 100%;
    text-align: center;
    display: flex;
    font-size: 1rem;
  }

  nav a.router-link-exact-active {
    background-color: rgb(15, 142, 196);
    text-shadow: 2px 2px #ff0000;
  }

  nav a:hover {
    background-color: #E0676D;
  }

  nav a {
    display: inline-block;
    -webkit-text-stroke: 0.05rem black;
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    .router-link {
      font-size: 1rem;
    }
  }
</style>
