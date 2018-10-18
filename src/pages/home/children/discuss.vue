<template>
   <div class="discuss">
    <headtop GOback='true' headTitle="消息详情" >
    </headtop>
    <detail></detail>
    <jikefooter></jikefooter>
   </div>
</template>

<script type="text/ecmascript-6">
import jikefooter from '@/components/footer/jikefooter'
import headtop from '@/components/header/headtop'
import detail from '@/components/comment/detail'
export default {
   name: 'discuss',
   data() {
       return {

    }
  }, 
    created(){
       this.id = this.$route.query.id;
       console.log(this.id)
   },
  components: {
      jikefooter,
      headtop,
      detail
  },
  methods: {
  
  },
}
</script>

<style scoped lang="stylus">

</style>
