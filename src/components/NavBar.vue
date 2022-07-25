<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <router-link class="navbar-brand" :to="{name: 'home'}">MySpace</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" :to="{name: 'home'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'contacts'}">Contacts</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'discover', params: {userId: 2}}">Discover</router-link>
        </li>
      </ul>

       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'login'}">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'register'}">Register</router-link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

</template>

<script>
export default {
    name: "NavBar",
}

</script>

<style scoped>
</style>