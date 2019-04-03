<template lang="pug">
  .block__pencil
    button(@click="onClick").button__pencil
</template>

<script>
export default {
  name: 'Pencil',
  props: {
    onClick: [Function, Boolean]
  },
};
</script>

<style lang="pcss">
.block__pencil {
  width: 14px;
  height: 14px;
}
.button__pencil {
  height: 100%;
  width: 100%;
  background: svg-load('../../images/icons/pencil.svg', fill=#a0a5b1, height=100%, width=100%);
  background-repeat: no-repeat;
}
</style>
