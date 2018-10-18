<template>
   <div class="header">
        <section v-if="GOback" class="GO_back" @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
            
        <use xlink:href="#icon-back"></use>
    </svg>      
       </section>
       <section v-if="search" class="serchbox">
             <form action="">  
        <input type="search" :placeholder=dateinit  class="search"  @click = "gotoAddress({path:'/search'})">
            <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-search"></use>
    </svg> 
      </form>
       </section>
       <section v-if="headTitle" class="headTitle">
          <span>{{headTitle}}</span>
       </section>
      
       
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   name: 'headtop',
   data() {
    return{
       dateinit:'马云辞职',
    }
},
   methods: {
       gotoAddress(path){
         		this.$router.push(path)
         	}
},
props: ['search', 'headTitle', 'GOback'],

}
</script>

<style scoped lang="stylus">
    .header
        width:100%
        height: 1.1rem;
        position fixed
        background:white
        box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.4)  
        top:0
        overflow hidden;
        z-index 999;
        .GO_back
            height: 1.1rem;
            line-height: 1.1rem;
            margin-left: .4rem;
        .serchbox
            form
                position:relative;
                text-align center;
                .search
                        width: 96%;
                        border-radius: 6px;
                        border: 1px solid gainsboro;
                        background: gainsboro;
                        padding: 0.3rem 0 0.3rem 1rem;
                        margin: .1rem  0;  
                        font-size 0.3rem;                
                    svg
                        position:absolute;
                        top:50%;
                        left:25px;
                        transform:translateY(-50%);
                        color:#bdbfbe;
                        font-size 0.5rem;
        .headTitle
                position: absolute;
                top: 50%;
                left: 35%;
                transform: translate(-50%, -50%);
                width: 50%;
                text-align: center;
                span 
                    font-size: 0.4rem;
                    text-align: center;
                    display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;

</style>
