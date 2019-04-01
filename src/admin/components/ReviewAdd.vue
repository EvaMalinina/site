<template lang="pug">
  .content-reviewadd
    .container
      .reviewadd
        .workadd__new
          button.button__workadd +
          .workadd__text Add work

</template>

<script>
export default {
  name: 'ReviewAdd'
  };
</script>

<style lang="pcss">
  .content-reviewadd {
    grid-area: content-reviewadd;
    background-color:#f7f9fe;
  }
  .reviewadd {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-template-rows: 380px 380px;
  grid-gap: 3%; 
}
</style>
