<template>
  <AppTooltip>
    <template
      slot="trigger"
      slot-scope="{ setIsOpen, isOpen }"
    >
      <AppButton @click.native="setIsOpen(!isOpen)">
        <GlobalEvents v-if="isOpen" @click="handleOutsideClick($event, setIsOpen)"/>
        <slot/>
      </AppButton>
    </template>
    <div slot="content" slot-scope="{ setIsOpen, isOpen }">
      <slot name="content" v-bind="{ setIsOpen }"/>
    </div>
  </AppTooltip>
</template>

<script>
import AppButton from './AppButton'
import AppTooltip from './AppTooltip'
import GlobalEvents from 'vue-global-events'

export default {
  components: {
    AppTooltip,
    AppButton,
    GlobalEvents
  },
  methods: {
    handleOutsideClick (e, cb) {
      if (!this.$el.contains(e.target)) cb()
    }
  }
}
</script>

<style lang="css">
</style>
