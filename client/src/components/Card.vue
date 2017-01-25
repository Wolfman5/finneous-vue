<template>
    <div class="row">
        <div class="card card-block">
            <h4 class="card-title">{{ card.title }}</h4>
            <p> {{card.imgUrl}} <p>
            <img :src="card.imgUrl" />
            <p> {{card.text}} </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['card']
//   methods: {
//     getImgUrl (imgUrl) {
//         var images = require.context('../assets/', false, /\.jpg$/)
//         return images('./' + imgUrl)
//     }
//   }
}
</script>