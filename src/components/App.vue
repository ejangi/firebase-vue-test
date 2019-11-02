<template>
  <div>
    <navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'

  export default {
    name: 'app',
    components: { Navbar }
  }
</script>

<!-- CSS libraries -->
<!-- <style src="normalize.css/normalize.css"></style> -->

<!-- Global CSS -->
<style>

</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>

</style>
