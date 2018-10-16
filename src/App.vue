<template>
  <div id="main">
    <!--el-row>
      <el-col :span=24 class="row-bg"><div id="titlebar" class="grid-content">
          <title_bar></title_bar>
      </div></el-col>
    </el-row>
    <div class="section  text-justify" :style="styles"  id="section1">
      <div class="container-fluid" :style="styles" id="clientmain">
        <el-row :gutter="5" class="row-bg" :style="styles">
            <router-view/>
        </el-row>
      </div>
    </div>
    <el-row  class="row-bg">
      <el-col :span=24> <div class="grid-content bg-blue-light"> this is footer </div></el-col>
    </el-row-->

    <el-container>
      <el-header>
        <title_bar></title_bar>
      </el-header>
      <el-main  class="themain" :style="styles">
        <el-row :gutter="4" :style="styles">
        <router-view/>
        </el-row>
      </el-main>
      <el-footer>
        <el-row class="row-bg">
          <el-col :span=24> <div class="grid-content bg-blue-light"> this is footer </div></el-col>
        </el-row>
      </el-footer>
    </el-container>

  </div>
</template>

<script>
import title_bar from "@/components/mNavbar.vue"
export default {
  name: 'App',
  components: { title_bar },

  computed: {
    styles: function (){
      return {
        height: window.screen.height + 'px'
      }
    }
  }
}
</script>
<style scope>

.row-bg {
padding: 4px 2px;
background-color: green;
}
.themain{
  border: 1px solid green;
}
</style>

