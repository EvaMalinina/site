<template lang="pug">
  .workadd__item
    .workadd__exmpl(
      v-if="item.pic"
      :style="{ backgroundImage: `url(${require(`../../images/content/${item.pic}`)})` }"
    )
    .container
      .workadd__exmpl-name {{ item.title }}
      .workadd__exmpl-text.text {{ item.text }}
      a.workadd__link(href="#") {{ item.link }}
      .workadd__btns
        .workadd__btn
          .workadd__btn-correct Correct
          .block__pencil
            button.button__pencil
        .workadd__btn
          .workadd__btn-correct Remove
          .block__cross
            button.button__cross
</template>

<script>
export default {
  name: 'Blank',
  props: {
    item: Object
  }
 
};
</script>

<style lang="pcss">
  @import "./blank.pcss";
</style>
