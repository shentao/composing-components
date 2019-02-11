<template>
  <div>
    <h1>AppSelect</h1>
    <AppSelect v-model="value" :options="options">
      <template #selected>
        {{ value.name || 'Select option' }}
        <AppIcon icon="chevron-down" style="margin-left: 10px;"/>
      </template>
      <template #option="{ option }">
        <div class="option">
          {{ option.name }}
          <span style="margin-left: 20px">
            <AppIcon icon="star" style="margin-right: 5px"/>{{ option.stars }}
          </span>
        </div>
      </template>
    </AppSelect>
  </div>
</template>

<script>
import AppSelect from '@/components/AppSelect'

export default {
  components: {
    AppSelect
  },
  data () {
    return {
      value: {},
      options: [
        { name: 'Vue-Multiselect', stars: '3904' },
        { name: 'Vuelidate', stars: '3369' },
        { name: 'Vue-Global-Events', stars: '342' }
      ]
    }
  }
}
</script>

<style lang="stylus">
.option
  display: flex
  justify-content: space-between
  white-space: nowrap;
</style>
