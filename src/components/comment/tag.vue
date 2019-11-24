<template>
   <div class="tags">
        <ul class="clearfix">
         <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="tags in taglist" :key="tags.id">
          <router-link :to="tags.link">
          <img :src="tags.src" class="img-responsive">
          </router-link>
          </swiper-slide>    
          </swiper>
      </ul>
   </div>
</template>

<script type="text/ecmascript-6">
import tagimg1 from '../../images/tagimg1.png'
import tagimg2 from '../../images/tagimg2.png'
import tagimg3 from '../../images/tagimg3.png'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
   name: 'tag',
   data() {
       return {
            taglist:[
            {src:tagimg1,link:'/search'},
            {src:tagimg2,link:'/search'},
            {src:tagimg3,link:'/search'},
            {src:tagimg3,link:'/search'},
            {src:tagimg3,link:'/search'},
            {src:tagimg3,link:'/search'},
          ],
           swiperOption: {
              slidesPerView : 4,
              spaceBetween : 15,
              slidesPerGroup : 4,
              slidesOffsetBefore : 20,
              
            }
       }
   },
   computed: {
        swiper() {
        return this.$refs.mySwiper.swiper
      },
        },
  components: {
      swiper,
     swiperSlide,
  },
   methods:{
        someSwiperEvent(){
          
         }
  }
}
</script>

<style scoped lang="stylus">
.tags
    padding:0.2rem 0;
    background #fafafa;
    border-top:2px;

</style>
