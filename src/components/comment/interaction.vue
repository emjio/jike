<template>
   <div class="interaction">
    <section :class="iscur?'added':''" @click="zanaddone" >
        <svg class="icon" aria-hidden="true">
     <use xlink:href="#icon-zan"></use>
    </svg>
     <span v-if="zannum>0" >{{zannum}}</span>
    </section>
    <router-link  :to="{path: '/discuss', query: {id:items_id}}">
    <section>
    <svg class="icon" aria-hidden="true">
     <use xlink:href="#icon-huifu"></use>
    </svg>
     <span v-if="huifunum>0" >{{huifunum}}</span>
    </section>
    </router-link>
    <section>
          <svg class="icon" aria-hidden="true">
     <use xlink:href="#icon-xunhuan"></use>
    </svg>
     <span v-if="zuanfanum>0" >{{zuanfanum}}</span>
    </section>
    <section>
          <svg class="icon" aria-hidden="true">
     <use xlink:href="#icon-fenxiangzhuanfafasongzhijiantouyuanxingshar"></use>
    </svg>
     <span v-if="sharenum>0" >{{sharenum}}</span>
    </section>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'interaction',
   data() {
       return {
           zannum:Math.floor(Math.random()*100),
           huifunum:Math.floor(Math.random()*100),
           zuanfanum:Math.floor(Math.random()*100),
           sharenum:Math.floor(Math.random()*100),
           iscur:false,
        
       }
   },
   created(){
       this.id = this.$route.query.id
   },
    computed:{
       
    },
    props:[
      'items_id'   
    ],
  components: {
      
  },

  methods:{
      zanaddone:function(){
          this.iscur==true?this.iscur=false:this.iscur=true;
          if(this.iscur){
              this.zannum = this.zannum+1;
          }else{
             this.zannum = this.zannum-1; 
          }
      }
  }
}

</script>

<style scoped lang="stylus">
    .interaction
            display flex
            justify-content space-between
            section
                    color #aaa
                    svg
                        font-size 0.3rem
            
            .added
                    color#f26855            

        
</style>
