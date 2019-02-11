import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ExampleOne from './views/ExampleOne.vue'
import ExampleTwo from './views/ExampleTwo.vue'
import ExampleThree from './views/ExampleThree.vue'
import Dynamic from './views/Dynamic.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/example-one',
      name: 'example-one',
      component: ExampleOne
    },
    {
      path: '/example-two',
      name: 'example-two',
      component: ExampleTwo
    },
    {
      path: '/example-three',
      name: 'example-three',
      component: ExampleThree
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: Dynamic
    }
  ]
})
