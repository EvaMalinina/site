<template lang='pug'>
  ul.block__list
    li(
      v-for="value in values"
    ).block__item
      SkillplankItem(
        :value = "value"
        @onTrash = "onTrash"
        @onEdit = "onEdit"
        @onTick = "onTick"
        @onCross = "onCross"
        @handleName="handleName"
      )

</template>

<script>
import SkillplankItem from './SkillplankItem'

  export default {
    name: 'SkillplankList',
    data () {
      return {

      }
    },
    props: {
      values: Array
    },
    computed: {},
    methods: {
      onTrash(valueId) {
        this.$emit('onTrash', valueId);
      },
      onEdit(valueId) {
        this.$emit('onEdit', valueId);
      },
      onTick(valueId) {
        this.$emit('onTick', valueId);
      },
      onCross(valueId) {
        this.$emit('onCross', valueId);
      },
      handleName(data) {
        this.$emit('handleName', data);
      }
    },
    components: {
      SkillplankItem
    }
  }
</script>


<style lang='pcss'>


.block__list {
  width: 100%;
  align-self: center;
  padding: 0px 0px 0px 10px;
}
.block__item {
  margin-bottom: 20px;
  display: flex;
}


</style>
