<template>
  <div class="home">
    <h3>{{msg}} </h3>
    <h2>Dylan Was Here!!</h2>
    <p>
        home works!
    </p>
    <img src="../assets/logo.png" />
    <div class="container">
        <card v-for="item in cards" v-bind:card="item"></card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card'
export default {
  name: 'home',
  components: {
    Card
  },
  data () {
    return {
      msg: 'Welcome to Your Home Page',
      cards: [
        {
          title: 'Cutest Puppy - Finley',
          imgUrl: '../assets/logo.png',
          text: 'My dog is the coolest!!!!'
        },
        {
          title: 'Asheville: The Princess and the Pup',
          imgUrl: './src/assets/img/Asheville.jpg',
          text: 'My girlfriend likes our dog way too much'
        }
      ]
    }
  }
}
</script>