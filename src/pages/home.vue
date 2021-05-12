<template>
    <div>
      <nav-header></nav-header>
      <router-view></router-view>
      <nav-footer></nav-footer>
    </div>
</template>
<script>
import navHeader from '../components/navHeader'
import navFooter from '../components/navFooter'
export default {
    name: "home",
    components: {
       navHeader,
       navFooter 
    }
}
</script>
<style lang="scss">
    
</style>