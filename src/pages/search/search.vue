<template>
   <div class="search_cover">
    <headtop GOback="true" search="true" ></headtop>
    <jikefooter></jikefooter>
   </div>
</template>

<script type="text/ecmascript-6">
import headtop from '@/components/header/headtop'
import jikefooter from '@/components/footer/jikefooter'
import   'vuex'
export default {
   name: 'search',
   data() {
       return {
         
   }
},
  components: {
     jikefooter,
      headtop,
      
  },
  methods:{
    
  }
  
}
</script>

<style scoped lang="stylus">
</style>
