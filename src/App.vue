<template>
  <div id="app">
    <h1>Hello Amsterdam!</h1>
    <p>
      How you
      <AppTooltip>
        doing?
        <div slot="content">
          Hey it’s Joey!
        </div>
      </AppTooltip>
    </p>
    <AppButton>Submit</AppButton>

    <br/>
    <br/>
    <br/>
    <AppDropdown>
      Select action
      <ul slot="content" class="content" slot-scope="{ setIsOpen }">
        <li @click="select('commit', setIsOpen)">Commit</li>
        <li @click="select('review', setIsOpen)">Review</li>
        <li @click="select('merge', setIsOpen)">Merge</li>
      </ul>
    </AppDropdown>
  </div>
</template>

<script>
import AppTooltip from './components/AppTooltip'
import AppButton from './components/AppButton'
import AppDropdown from './components/AppDropdown'

export default {
  name: 'app',
  components: {
    AppTooltip,
    AppButton,
    AppDropdown
  },
  methods: {
    select (option, callback) {
      console.log(option, ' selected')
      callback()
    }
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

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
