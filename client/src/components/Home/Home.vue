<script>
import Card from '../Card/Card'
export default {
  name: 'home',
  template: require('./Home.template.html'),
  styles: require('./Home.styles.css'),
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