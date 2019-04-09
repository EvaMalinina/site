<template lang="pug">
    .workadd__item
      .workadd__exmpl Picture here
      .container
        .workadd__exmpl-name Write a name
        .workadd__exmpl-text.text Write description
        a.workadd__link(href="#") Link to follow
        .workadd__btns
          .workadd__btn
            .workadd__btn-correct Correct
            .block__pencil
              button.button__pencil
          .workadd__btn(
            type="button",
            @click="showBlankEdit = false"
          )
            .workadd__btn-correct Remove
            .block__cross
              button.button__cross
</template>

<script>
export default {
  name: 'BlankEdit',
  props: {
    item: Object
  },
  methods: {
    showBlankEdit(){
    }
  }
 
};
</script>

<style lang="pcss">
  @import "./blank.pcss";
</style>