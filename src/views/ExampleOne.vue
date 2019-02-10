<template>
  <div>
    <h1>AppTooltip</h1>
    <h2>
      How are you
      <AppTooltip>
        doing?
        <div slot="content">
          Hello Amsterdam!
        </div>
      </AppTooltip>
    </h2>
  </div>
</template>

<script>
import AppTooltip from '@/components/AppTooltip'

export default {
  components: {
    AppTooltip
  },
  methods: {
    select (option, callback) {
      callback()
    }
  }
}
</script>
