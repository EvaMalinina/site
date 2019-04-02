<template lang="pug">
  .block__tick
    button.button__tick
</template>

<script>
export default {
  name: 'Tick',
};
</script>

<style lang="pcss">
.block__tick {
  width: 15px;
  height: 12px;
}
.button__tick {
  height: 100%;
  width: 100%;
  background: svg-load('../../images/icons/tick.svg',  fill= #00d70a, height=100%, width=100%);
  background-repeat: no-repeat;
}
</style>