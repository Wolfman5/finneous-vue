<script>
import Card from '../Card/Card'
export default {
  name: 'home',
  template: require('./Home.template.html'),
  styles: require('./Home.styles.css'),
  components: {
    Card
  },
  mounted: function () {
    this.fetchCards()
  },
  data () {
    return {
      cards: []
    }
  },
  methods: {
    fetchCards: function () {
      console.log('TRYINg TO GET STUFF')
      this.axios.get('http://localhost:3000/blogs')
        .then((response) => {
          this.$data.cards = response.data.cards
        })
    }
  }
}
</script>