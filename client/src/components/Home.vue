<template>
  <div class="home">
    <div class="navbar">
      <Navbar></Navbar>
    </div>
    <div class="mdl-grid">
      <div class="content mdl-cell mdl-cell--2-col"></div>
      <div class="content mdl-cell mdl-cell--8-col">
        <card v-for="item in cards" v-bind:card="item"></card>
      </div>
      <div class="content mdl-cell mdl-cell--2-col"></div>
    </div>
  </div>
</template>

<script>
import Card from './Card'
import Navbar from './Navbar'
export default {
  name: 'home',
  components: {
    Card,
    Navbar
  },
  data () {
    return {
      msg: 'Welcome to Your Home Page',
      cards: [
        {
          title: 'Asheville: The Princess and the Pup',
          imgUrl: '/static/img/Asheville.jpg',
          text: 'My girlfriend likes our dog way too much'
        },
        {
          title: 'Playing with the puppy uncles',
          imgUrl: '/static/img/puppyUncles.jpg',
          text: 'Finley playing with his puppy uncles'
        }
      ]
    }
  }
}
</script>

<style>
 .mdl-grid {
   max-width: 80%;
 }
 .content{
   margin-top: 35vh;
 }
</style>