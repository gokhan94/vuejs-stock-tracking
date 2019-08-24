<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/navbar/Header'
import Footer from './components/navbar/Footer'
export default {
  name: 'app',
  components : {
    appHeader: Header,
    appFooter: Footer
  },
  created(){
    this.$store.dispatch("initApp")
    this.$store.dispatch("initCategory")
    this.$store.dispatch("getTradeResult")
  },
}
</script>

<style>

</style>
