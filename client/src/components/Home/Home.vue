<template>
  <div>
    <card v-for="item in cards" v-bind:card="item"></card>
  </div>
</template>

<script>
import Card from '../Card/Card'
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
          id: '1',
          title: 'Asheville: The Princess and the Pup',
          imgUrl: '/static/img/Asheville.jpg',
          text: 'My girlfriend likes our dog way too much'
        },
        {
          id: '2',
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

 @media screen and (min-width: 0px) and (max-width: 1024px) {
  #content { 
    margin-top: 50px;
   }   /* hide it elsewhere */
}
</style>