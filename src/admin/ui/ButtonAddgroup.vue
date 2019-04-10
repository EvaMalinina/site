<template lang="pug">
  .block-info__modify(
    type="button"
    @click="handleClick"
  )
    button.circle-btn
    a.block-info__add Add group
</template>

<script>

export default {
  name: 'ButtonAddgroup',
  data () {
    return {}
  },
  props: {
    showAddingForm: Function
  },
  methods: {
    handleClick(event) {
      this.$emit('showAddingForm', event)
    }
  }
};
</script>

<style lang="pcss">
.block-info__modify {
  display: flex;
  align-items: center;
}
.block-info__add {
  font-size: 16px;
  font-weight: 400;
  line-height: 2.12;
  letter-spacing: normal;
  text-align: left;
  color: #383bcf;
  margin-left: 14px;
}
.circle-btn {
  width: 21px;
  height: 21px;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
  border-radius: 50%;
  position: relative;
}
.circle-btn::after {
  content: "+";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  font-size: 15px;
  color: #ffffff;
}
</style>
