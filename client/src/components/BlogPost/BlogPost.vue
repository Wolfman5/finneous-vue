<script>
export default {
  name: 'BlogPost',
  template: require('./BlogPost.template.html'),
  styles: require('./BlogPost.styles.css'),
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      blogId: this.$route.query.blogId
    }
  }
}
</script>