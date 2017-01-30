<script>
export default {
  name: 'hello',
  template: require('./Hello.template.html'),
  styles: require('./Hello.styles.css'),
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
  color: red;
}
</style>
