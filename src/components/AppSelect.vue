<template>
  <AppDropdown>
    <slot name="selected">some content {{ value }}</slot>
    <ul slot="content" class="content" slot-scope="{ setIsOpen }">
      <li
        v-for="(option, index) of options"
        :key="index"
        @click="update(option, setIsOpen)"
      >
        <slot name="option" :option="option">{{ option }}</slot>
      </li>
    </ul>
  </AppDropdown>
</template>

<script>
import AppDropdown from './AppDropdown'

export default {
  components: {
    AppDropdown
  },
  props: {
    options: {
      type: Array
    },
    value: {
      type: [String, Object]
    }
  },
  methods: {
    update (option, cb) {
      this.$emit('input', option)
      cb()
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  list-style: none
  padding: 0
  margin: -10px

  li
    border-bottom: 1px solid #f0f0f0
    padding: 8px 14px
    cursor: pointer

    &:hover
      background: #f0f0f0
</style>
