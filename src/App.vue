<template>
  <div id="app">
    <div>
      <title_bar></title_bar>
    </div>    
    <router-view/>
  </div>
</template>

<script>
import title_bar from "@/components/mNavbar.vue"
export default {
  name: 'App',
  components: { title_bar }
}
</script>

