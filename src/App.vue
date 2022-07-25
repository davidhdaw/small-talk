<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1><span class="small">small</span> TALK</h1>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Random Party Boosters</RouterLink>
        <RouterLink to="/saved">Saved Party Boosters</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
  .small {
    font-size: 23px;
  }

header {
  line-height: 1.5;
}
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  display: flex;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: #247BA0;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  -webkit-text-stroke: 1px black;
  font-size: 20px;
}

nav a:first-of-type {
  border: 0;
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}
</style>
