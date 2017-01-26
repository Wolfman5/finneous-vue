<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>
        <h1>{{card.title}}</h1>
      </span>
    </div>
    <div class="text item">
      <img :src="card.imgUrl" class="image">
    </div>
     <div class="footer bottom clearfix">
        <div class="footer-content">
          {{card.text}} <el-button type="primary" class="button">Read More</el-button>
        </div>
      </div>
  </el-card>
</template>

<script>
export default {
  name: 'Card',
  props: ['card']
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  img {
    width: 100%;
    height:100%
  }
  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
  .box-card {
    width: 75%;
    height: 33%;
    margin: 0 auto;
    margin-bottom: 18px;
    position: relative;

  }
  .footer{
    border-top: 1px solid #d1dbe5;
  }
  .footer-content{
    margin-top: 10px;
  }
  .button{
    float: right;
  }
</style>