<template>
  <div class="layout">
    <div class="header">
      <h2>header</h2>
      <slot name="header"/>
    </div>
    <div class="body">
      <div class="main">
        <h2>main</h2>
        <slot name="main"/>
      </div>
      <div class="sidebar">
        <h2>sidebar</h2>
        <slot name="sidebar"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.layout
  display: flex
  flex-direction: column
  margin: 50px
  color: white

  h2
    position: absolute
    text-transform: uppercase
    left: 20px
    top: 20px
    margin: 0

.header, .main, .sidebar
  display: flex
  position: relative
  align-items: center;
  justify-content: center;

.header
  height: 200px
  background: green

.body
  display: flex
  height: 400px

.sidebar
  width: 200px
  background: blue

.main
  background: red
  flex-grow: 1
</style>
