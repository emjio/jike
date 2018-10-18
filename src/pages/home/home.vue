<template>
  <div class="homecover">
    <headtop search='true' >
    </headtop>
    <main>
      <tab :line-width=2 active-color='#fc378c' v-model="index">
        <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index" :threshold="200">{{item}}</tab-item>
      </tab>
      <swiper v-model="index"  :show-dots="false" style="width:100%;height: 100%;padding-bottom: 90px;background-color: #eef2f1;"  height="100%">
        <swiper-item :key="1">
          <div class="tab-swiper vux-center">
            <detail></detail>
          </div>
        </swiper-item>
        <swiper-item :key="2">
          <div class="tab-swiper vux-center">
             <tag></tag>
            <detail></detail>
            </div>
        </swiper-item>
        <swiper-item :key="3">
          <div class="tab-swiper vux-center">
            <detail></detail>
            </div>
        </swiper-item>
      </swiper>
    </main>
    <jikefooter></jikefooter>
    </div>
</template>

<script>
import jikefooter from '@/components/footer/jikefooter'
import headtop from '@/components/header/headtop'
import detail from '@/components/comment/detail'
import tag from '@/components/comment/tag'
import  'vuex'
const list = () => ['关注', '推荐', '附近',]
export default {
   name: 'home',
   data() {
       return {
        list2: list(),
        index: 0,
        demo2: '推荐',
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
      }
       }
   },
   computed: {

        },
  components: {
      jikefooter,
      headtop,
     detail,
     tag,
  },
  methods:{
    gotoAddress(path){
         		this.$router.push(path)
           },
           switchTabItem (index) {
      console.log('on-before-index-change', index)
      this.$vux.loading.show({
        text: 'loading'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.index01 = index
      }, 1000)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  @import 'home.styl';
    
</style>
