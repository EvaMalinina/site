<template lang="pug">
  .block__trash
    button(@click="onClick").button__trash
</template>

<script>
export default {
  name: 'Trash',
  props: {
    onClick: [Function, Boolean]
  },
};
</script>

<style lang="pcss">
.block__trash {
  width: 12px;
  height: 15px;
}
.button__trash {
  height: 100%;
  width: 100%;
  background: svg-load('../../images/icons/trash.svg', fill=#a0a5b1, height=100%, width=100%);
  background-repeat: no-repeat;
}
</style>
