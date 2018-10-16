<template>

  <div>
    <div>
      <nav class="navbar navbar-default navbar-fixed-top nav-bg-secondary" id="header">
        <div class="container-fluid">
          <div class="navbar-header">
            <!-- button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-ex-collapse">
              <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>This is button
              </button -->
            <a class="navbar-brand"><img height="20" alt="Brand" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAA81BMVEX///9VPnxWPXxWPXxWPXxWPXxWPXxWPXz///9hSYT6+vuFc6BXPn37+vz8+/z9/f2LeqWMe6aOfqiTg6uXiK5bQ4BZQX9iS4VdRYFdRYJfSINuWI5vWY9xXJF0YJR3Y5Z4ZZd5ZZd6Z5h9apq0qcW1qsW1q8a6sMqpnLyrn76tocCvpMGwpMJoUoprVYxeRoJjS4abjLGilLemmbrDutDFvdLPx9nX0eDa1OLb1uPd1+Td2OXe2eXh3Ofj3+nk4Orl4evp5u7u7PLv7fPx7/T08vb08/f19Pf29Pj39vn6+fuEcZ9YP35aQn/8/P1ZQH5fR4PINAOdAAAAB3RSTlMAIWWOw/P002ipnAAAAPhJREFUeF6NldWOhEAUBRvtRsfdfd3d3e3/v2ZPmGSWZNPDqScqqaSBSy4CGJbtSi2ubRkiwXRkBo6ZdJIApeEwoWMIS1JYwuZCW7hc6ApJkgrr+T/eW1V9uKXS5I5GXAjW2VAV9KFfSfgJpk+w4yXhwoqwl5AIGwp4RPgdK3XNHD2ETYiwe6nUa18f5jYSxle4vulw7/EtoCdzvqkPv3bn7M0eYbc7xFPXzqCrRCgH0Hsm/IjgTSb04W0i7EGjz+xw+wR6oZ1MnJ9TWrtToEx+4QfcZJ5X6tnhw+nhvqebdVhZUJX/oFcKvaTotUcvUnY188ue/n38AunzPPE8yg7bAAAAAElFTkSuQmCC"></a>
            <a class="navbar-brand">INS</a>
          </div>
          <div class="collapse navbar-collapse" id="navbar-ex-collapse">
            <ul class="nav navbar-nav navbar-right nav-tabs">
              <li><a href="#">首页</a></li>
              <li class="active"><a href="/conf">配置监控</a></li>
              <li><a href="/statistics">统计</a></li>
              <li class="dropdown" role>
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Admin<span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Logout</a></li>
                  <li class="divider"></li>
                  <li><a href="#">About</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>      
    </div>
    <!--div class="pao">
      <a href="/conf">configure</a>
      <a href="/statistics">statistics</a>
      {{ msg }}
      <template> 
      <el-carousel :interval="2000" type="card" height="100px"> 
        <el-carousel-item v-for="item in allitem" :key="item"> 
          <h3>{{ item }}</h3> 
          </el-carousel-item> 
        </el-carousel> 
      </template>
    </div -->
    
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
.nav-bkgclr {
  background-color: #99a9bf;
}
.nav-bg-secondary {
  background-color: #4f70ce;
}
.nav-bg-primary {
  background-color: #12bbad;
}/*
.navbar a{
  color:#99a9bf;
}*/
.pao { 
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
