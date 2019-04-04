<template lang="pug">
  .header-nav
    .container
      ul.nav
        li.nav__item 
          router-link(
            to = "/about"
          ).nav__link About me
        li.nav__item 
          router-link(
            to = "/works"
          ).nav__link Works
        li.nav__item 
          router-link(
            to = "/reviews"
          ).nav__link Reviews
</template>

<script>
export default {
  name: 'header-nav'
};
</script>

<style lang="postcss">
 .header-nav {
    grid-area: header-nav;
    background-color: white;
  }
  .nav {
    display: flex;
    text-decoration: none;
    list-style: none;
  }
  .nav__item {
    width: 8.75%;
    padding: 26px 0;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: normal;
    text-align: center;
  }
  .nav__item:hover {
    border-bottom: solid 3px #383bcf;
    transition: 0.7s;
  }
  .nav__link {
    text-decoration: none;
    color: #414c63;
  }
  .nav__link:hover {
    color: #383bcf;
  }
</style>
