<template>
  <div class="nav">
    {{ msg }}
    <template> 
     <el-carousel :interval="2000" type="card" height="100px"> 
       <el-carousel-item v-for="item in allitem" :key="item"> 
         <h3>{{ item }}</h3> 
        </el-carousel-item> 
      </el-carousel> 
    </template>
  </div>
</template>

<script>
export default {
  name: 'title_bar',
  data () {
    return {
      allitem: [
        "aaaaaaaaaaaaaaa",
        "bbbbbbbbbbbbbbb",
        "ccccccccccccccc",
        "ddddddddddddddd"
      ],
      msg: "this is nav bar"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav { 
  font-family: 'Avenir', Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased; 
  -moz-osx-font-smoothing: grayscale; 
  text-align: center; 
  color: #2c3e50; 
  margin-top: 10px; 
} 
.el-carousel__item h3 { 
  color: #475669; 
  font-size: 24px; 
  opacity: 0.75; 
  line-height: 100px; 
  margin: 0; 
} 
.el-carousel__item:nth-child(2n) { 
  background-color: #99a9bf; 
} 
.el-carousel__item:nth-child(2n+1) { 
  background-color: #d3dce6; 
}
</style>
