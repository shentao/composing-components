<template>
  <div>
    <h1>AppSelect</h1>
    <AppSelect v-model="value" :options="options">
      <template #selected>{{ value }}</template>
      <template #option="{ option }">Oh hi {{ option }}</template>
    </AppSelect>
    {{ value }}
  </div>
</template>

<script>
import AppSelect from '@/components/AppSelect'

export default {
  name: 'app',
  components: {
    AppSelect
  },
  data () {
    return {
      value: '',
      options: ['Vue-Multiselect', 'Vuelidate', 'Vue-Global-Events']
    }
  }
}
</script>
