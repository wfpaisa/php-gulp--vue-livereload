<template>
  <div class="hello">
    {{ greeting }} <span><slot /></span>!
  </div>
</template>
 
<script>
    import Vue from 'vue';
 
    export default Vue.component('Hello', {
        data() {
            return {
                greeting: 'Hello'
            }
        }
    });
</script> 
 
<style lang="less">
    .hello {
        color: red;
        
        span {
            color: blue;
        }
    }
</style> 