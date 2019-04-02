<template lang="pug">
  .block__btns
    Tick(v-if="visible" @click="visible=!visible")
    Cross(v-if="visible" @click="visible=!visible")
    Pencil(v-if="invisible" @click="invisible=!invisible")
    Trash(v-if="invisible" @click="invisible=!invisible")
    
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
    onTick: Function(),
    onCross: Function(),
    onEdit: Function(),
    onTrash: Function()
  }
};

</script>

<style lang="pcss">
@import "./btns.pcss";
</style>