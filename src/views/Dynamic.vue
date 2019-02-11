<template>
  <div>
    <h2>Select slot</h2>
    <select v-model="position">
      <option value="header">Header</option>
      <option value="sidebar">Sidebar</option>
      <option value="main">Main</option>
    </select>

    <Layout>
      <template v-slot:[position]>
         <h1>HELLO!</h1>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from '@/components/Layout'

export default {
  components: { Layout },
  data () {
    return {
      position: 'header'
    }
  }
}
</script>

<style lang="stylus">
.red-background
  background: red
</style>
