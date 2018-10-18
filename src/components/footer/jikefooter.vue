<template>
   <footer class="footer  col-12 ">
     <section @click = "gotoAddress({path:'/'})" >
       <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-home"></use>
</svg>  
<p>首页</p></section>
     <section>
           <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-team"></use>
</svg>  
         <p>动态</p></section>
     <section class="add radius15 w12">
          <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-add"></use>
</svg>  
     </section>
     <section>
           <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-search"></use>
</svg>  <p>发现</p></section>
     <section>
         <svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-me"></use>
</svg><p>我的<badge></badge></p></section>
   </footer>
</template>

<script type="text/ecmascript-6">

export default {
   name: 'jikefooter',
   data() {
       return {
           
       }
   },
    components: {

    },
    prop:[
        
    ],
    methods: {
        	  gotoAddress(path){
         		this.$router.push(path)
         	}
        },
    }
</script>

<style scoped lang="stylus">

.footer
    position:fixed;    
    left:0;
    right:0;
    bottom:0;
    display:flex;
    justify-content:space-around;
    box-shadow: 1px 0px 6px 0px rgba(0,0,0,0.4);
    padding:.1rem 0;
    color:gray;
    background :#fff;
    .add
        background:#01a9f2;
        color:#fff;
        position:relative
        svg
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%)
    
    section
        text-align:center;
        svg 
            font-size:.6rem;
        p
            margin-top .1rem;    
    

        

</style>
