<template>
   <div class="detail">
       <ul>
           <li v-for="items in itemlist" :key="items.id" >
               <div class="detail_header">
               <router-link :to="items.itemstag_link">
               <div class="tagnam">
                   <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tubiaozhizuomoban-"></use>
                </svg>
                {{items.tag}}
               </div>
               </router-link>
               <div class="more" @click='morecelect'>
                <span>{{fulltime}}</span><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiantou8"></use>
                </svg>
                </div>
               </div>
               <div class="detail_content">
                   <p>{{items.text}}</p>   
                        <div class="img-ctrl"> 
                     <span style="font-size:20px;" class="isload">Loading</span>
                       <x-img :src="items_imgurl.pics"  v-if="items_imgurl.pics!=''" desc="" v-for="items_imgurl in items.items_imgurl" :key="items_imgurl.id"  @on-success="success"  @on-error="error" class="img-responsive" error-class="ximg-error" :offset="30"  container=".img-ctrl" @click="show(index)">
                           </x-img>
                          <div v-transfer-dom>
                    <previewer :list="itemlist" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>
                    </div> 
                           </div>                                            
                   <video  v-if="items.items_videourl!=''"                    
                    controls>
                       <source :src="items.items_videourl" type="video/mp4">
                   </video>          
               </div>
               <interaction :items_id="items.id" ></interaction>              
           </li>
       </ul>
   </div>
</template>

<script type="text/ecmascript-6">

import logo from '@/images/404.png'
import interaction from './interaction'

export default {
   name: 'detail',
   data() {
       return {
           logo:logo,
           itemlist:[{
               id:1,
               tag:"name1",
                itemstag_link:'/',
                text:"测试文章阿松大测试文章阿松大测试文章阿松大",
                items_imgurl:[{pics:'https://o5omsejde.qnssl.com/demo/test1.jpg',}],
                items_videourl:'',
                detail_link:'/search',  
                date:1539584985217,
           },{
                id:2,
               tag:"name1",
                itemstag_link:'/',
               text:"测试文章阿松大测试文章阿松大测试文章阿松大",
               items_imgurl:[{pics:'https://o5omsejde.qnssl.com/demo/test1.jpg'},{pics:'https://o5omsejde.qnssl.com/demo/test0.jpg'}],
               items_videourl:'',
               detail_link:'/',
              date:1539584985217,

           },{
               id:3,
               tag:"name1",
                itemstag_link:'/',
               text:"测试文章阿松大测试文章阿松大测试文章阿松大",
              items_imgurl:[{pics:logo},{pics:logo}],
               items_videourl:'http://101.89.124.218/6572E7487054871CF507D5B25/03000A20005BC01EEC5AD72330EC2D751C0245-B789-4DE3-B98C-15DDFBF6BA0E.mp4?ccode=0502&duration=392&expire=18000&psid=2b9b855add14e8b6612020e875e7654b&ups_client_netip=3b35aef2&ups_ts=1539571622&ups_userid=&utid=Zqf0E4M51kkCATs1rvI5Rtl%2B&vid=XMzg1OTIzMDUxMg%3D%3D&vkey=A4c168a8e8d29455966506a8e2b74414c&s=4ca8e967fffd4e838530&sp=&ali_redirect_domain=vali-dns.cp31.ott.cibntv.net&ali_redirect_ex_hot=0',
               detail_link:'/',
               date:1539584985217,

           },{
                id:2,
               tag:"name1",
                itemstag_link:'/',
               text:"测试文章阿松大测试文章阿松大测试文章阿松大",
               items_imgurl:[{pics:'https://o5omsejde.qnssl.com/demo/test2.jpg'},{pics:'https://o5omsejde.qnssl.com/demo/test0.jpg'}],
               items_videourl:'',
               detail_link:'/',
              date:1539584985217,

           },{
                id:2,
               tag:"name1",
                itemstag_link:'/',
               text:"测试文章阿松大测试文章阿松大测试文章阿松大",
               items_imgurl:[{pics:'https://o5omsejde.qnssl.com/demo/test2.jpg'},{pics:'https://o5omsejde.qnssl.com/demo/test0.jpg'}],
               items_videourl:'',
               detail_link:'/',
              date:1539584985217,

           },{
                id:2,
               tag:"name1",
                itemstag_link:'/',
               text:"测试文章阿松大测试文章阿松大测试文章阿松大",
               items_imgurl:[{pics:'https://o5omsejde.qnssl.com/demo/test2.jpg'},{pics:'https://o5omsejde.qnssl.com/demo/test0.jpg'}],
               items_videourl:'',
               detail_link:'/',
              date:1539584985217,

           },],
           complete:false,
           
       }
   },
   computed:{
       fulltime:function(itemlist){
            for(let i=0;i<itemlist.length;i++){
              return new Date(this.itemlist[i].date).toLocaleString(); 
          }                
       }
   },
  components: {
       interaction,

  },
   created(){
    //当v-pviewer挂载后，它会立即执行一次抓取图片
    this.complete = true;
  },
  methods:{
        success (src, ele) {
      console.log('success load', src)
      const span = ele.parentNode.querySelector('span')
      ele.parentNode.removeChild(span)
    },
    error (src, ele, msg) {
      console.log('error load', msg, src)
      const span = ele.parentNode.querySelector('span')
      span.innerText = 'load error'
    },
    morecelect(){
        
    }
  },
}
</script>

<style scoped lang="stylus">
.ximg-error {
  background-color: yellow;
  text-align center;
}
.ximg-error:after {
  content: '加载失败';
  color: red;
}
.detail
        ul
          li
             background #fff;
             margin-top:0.25rem;
             padding 0.3rem 0.2rem;
             .detail_header
                display flex;
                justify-content space-between
                align-items center;
                .tagnam
                    display inline-block
                    background #f0f3f5;
                    border-radius 0.3rem;
                    padding:0.1rem 0.2rem;
                    color:#03a9f4;
                    font-size: 0.3rem;
                    svg
                        font-size 0.4rem;
                .more
                     svg
                        font-size 0.4rem;

            .detail_content
                     padding:0.2rem 0;
                     img 
                         margin 0.2rem auto;
                     video
                         max-width 100%; 
                         margin 0.2rem auto;
                                    
  

</style>
