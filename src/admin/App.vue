<template lang="pug">
  .wrapper-inner
    MainHeader
    Nav
    About
    Works
    Reviews
    // router-view
    

</template>


<style lang="pcss">
  @import "../styles/mixins.pcss";
  body {
    margin: 0;
    padding: 0;
    font-family: OpenSans;
    font-size: 14px;
    font-weight: normal;
  }
  button {
    padding: 0;
    margin: 0;
    cursor: pointer;
    outline: none;
    border: 0;
  }
  input {
    margin: 0;
    outline: none;
    border: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .wrapper-inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 77px 1fr 1fr 1fr;
    grid-template-areas: 
      "header"
      "header-nav"
      "content"
      "content-works"
      "content-reviews"
  }  
</style>

<script>
import MainHeader from './components/Header.vue'
import Nav from './components/Nav.vue'
import About from './pages/About.vue'
import Works from './pages/Works'
import Reviews from './pages/Reviews.vue'


export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  methods: {
		handleClick(e) {
			console.log(this.text);
		}
  },
  components: {
    MainHeader,
    Nav,
    About,
    Works,
    Reviews
  }
}
</script>
