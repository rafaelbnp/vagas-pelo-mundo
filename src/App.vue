<template>
  <div class="app">
    <h1>VagasPeloMundo.dev</h1>
    <nav>
      <ul>
        <li>
          <router-link to='/'>Home</router-link>
        </li>
        <li>
          <router-link to='/new'>New</router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'VagasPeloMundo'
};
</script>

<style lang="scss">
@import "~bulma/bulma";
</style>
