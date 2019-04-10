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
        @onCross = "clearSkill"
        @handleName="handleName"
        @handlePrc="handlePrc"
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
        // console.log(this);
        this.$emit('onCross', valueId);
      },
      handleName(data) {
        this.$emit('handleName', data);
      },
      handlePrc(data) {
        this.$emit('handlePrc', data);
      },
      clearSkill(data) {
        // console.log(data);
        this.$emit('onCross', data);
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
