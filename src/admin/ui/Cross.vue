<template lang="pug">
  .block__cross
    button.button__cross
</template>

<script>
export default {
  name: 'Cross',
};
</script>

<style lang="pcss">
.block__cross {
  width: 14px;
  height: 12px;
}
.button__cross {
  height: 100%;
  width: 100%;
  background: svg-load('../../images/icons/remove.svg',  fill= #bf2929, height=100%, width=100%);
  background-repeat: no-repeat;
}
</style>