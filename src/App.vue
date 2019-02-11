<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Start</router-link> |
      <router-link to="/example-one">Example #1</router-link> |
      <router-link to="/example-two">Example #2</router-link> |
      <router-link to="/example-three">Example #3</router-link>
      <router-link to="/dynamic">Dynamic</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
