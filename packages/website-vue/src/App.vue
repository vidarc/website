<template>
  <div id="app">
    <div id="nav">
      <span>
        <router-link to="/">Home</router-link>
      </span>
      <span>
        <router-link to="/concentration">Concentration</router-link>
      </span>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  & > span:not(:last-child)::after {
    content: '|';
    color: #2c3e50;
    margin: 0 8px;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
