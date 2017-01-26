<template>
  <div class="home">
    <div class="navbar">
      <Navbar></Navbar>
    </div>
    <div class="container">
        <card v-for="item in cards" v-bind:card="item"></card>
      </div>
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
          title: 'Cutest Puppy - Finley',
          imgUrl: '/static/img/finleyPark.jpg',
          text: 'My dog is the coolest!!!!'
        },
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

<styles>
  .navbar{
    margin-bottom: 18px;
  }
</styles>