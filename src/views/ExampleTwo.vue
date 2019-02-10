<template>
  <div>
    <h1>AppDropdown</h1>
    <AppDropdown>
      Learn more
      <div slot="content" class="content" slot-scope="{ setIsOpen }">
        <p>
          Dropdown can have different contents inside.<br/>
          You can even put more buttons inside if you want!
        </p>
        <AppButton @click="setIsOpen(false)">Close</AppButton>
      </div>
    </AppDropdown>
  </div>
</template>

<script>
import AppDropdown from '@/components/AppDropdown'
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppDropdown,
    AppButton
  },
  methods: {
    select (option, callback) {
      callback()
    }
  }
}
</script>

<style lang="stylus" scoped>

.content
  padding: 10px
  margin: -20px 0 0
  min-width: 250px
</style>
