<template>
  <div class="container">
    <Header/>
    <TodoBody/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../src/components/Header.vue';
import Footer from '../src/components/Footer.vue';
import TodoBody from '../src/components/Todo-Body.vue'
export default {
    name: 'Home',
    components: {
      Header, 
      Footer,
      TodoBody
    }
}
</script>

<style scoped>
  .container{
    background: #eeeeee;
  }
</style>