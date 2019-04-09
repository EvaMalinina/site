<template lang="pug">
    .workadd__item
      .workadd__exmpl Picture here
      .container
        .workadd__exmpl-name Name
        .workadd__exmpl-text.text Description
        a.workadd__link(href="#") Link to follow
        .workadd__btns
          .workadd__btn
            .workadd__btn-correct Correct
            .block__pencil
              button.button__pencil
          .workadd__btn.workadd__btn_remove
            .workadd__btn-correct Remove
            .block__cross
              button.button__cross
</template>

<script>
export default {
  name: 'BlankReady',
  data() {
    return {
    }
  },
  props: {
    item: Object
  },
  
 
};
</script>

<style lang="pcss">
  @import "./blank.pcss";
</style>