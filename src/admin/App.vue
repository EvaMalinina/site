<template lang="pug">
  .wrapper-inner
    MainHeader
    Nav
    router-view
</template>

<script>

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
    MainHeader: () => import("./components/Header.vue"),
    Nav: () => import("./components/Nav.vue"),
    About: () => import("./pages/About.vue"),
    Works: () => import("./pages/Works.vue"),
    Reviews: () => import("./pages/Reviews.vue"),
    Login: () => import("./pages/Login.vue"),
  }
}
</script>



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
    grid-template-rows: 80px 77px 1fr;
    grid-template-areas:
      "header"
      "header-nav"
      "content"
  }
</style>
