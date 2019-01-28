<template>
  <button type="button" class="button" v-on="$listeners">
    <slot/>
  </button>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
.button
  display: inline-flex
  padding: 8px 16px
  color: #fff
  background: #3a82d4
  font-weight: bold
  font-size: 1rem
  border: none
  border-radius: 4px
  align-items: center

  &:hover
    background: darken(#3a82d4, 10%)
</style>
