<script>
export default {
  name: 'BlogPost',
  template: require('./BlogPost.template.html'),
  styles: require('./BlogPost.styles.css'),
  mounted: function () {
    this.fetchCard(this.$route.query.blogId)
  },
  data () {
    return {
      msg: '',
      title: '',
      imgUrl: '',
      blogId: this.$route.query.blogId
    }
  },
  methods: {
    fetchCard: function (id) {
      this.axios.get('http://localhost:3000/blogs/' + id)
        .then((response) => {
          this.$data.title = response.data.title
          this.$data.msg = response.data.text
          this.$data.imgUrl = response.data.imgUrl
        })
    }
  }
}
</script>