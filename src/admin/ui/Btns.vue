<template lang="pug">
  .block__btns
    Tick(
      v-if="onTick"
      :onClick="onTick" 
    )
    Cross(
      v-if="onCross"
      :onClick="onCross"
      
    )
    Pencil(
      v-if="onEdit"
      :onClick="onEdit"
    )
    Trash(
      v-if="onTrash"
      :onClick="onTrash"
    )

</template>

<script>
import Tick from './Tick'
import Cross from './Cross'
import Pencil from './Pencil'
import Trash from './Trash'

export default {
  name: 'Btns',
  components: {
    Tick,
    Cross,
    Pencil,
    Trash
  },
  data() {
    return {
      visible: true,
      invisible: false
      
    }
  },
  props: {
    onTick: [Function, Boolean],
    onCross: [Function, Boolean],
    onEdit: [Function, Boolean],
    onTrash: [Function, Boolean]
  },
  // methods: {
  //   onCross(value) {
  //     console.log('yes');
  //   }
  // }
};

</script>

<style lang="pcss">
@import "./btns.pcss";
</style>
