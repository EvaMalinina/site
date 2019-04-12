<template lang='pug'>
  ul.block__list
    li(
      v-for="skill in skills"
      :key = "skill.id"
    ).block_skill
      SkillplankItem(
        :skill = "skill"
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
      skills: Array
    },
    computed: {},
    methods: {
      onTrash(skillId) {
        this.$emit('onTrash', skillId);
      },
      onEdit(skillId) {
        this.$emit('onEdit', skillId);
      },
      onTick(skillId) {
        this.$emit('onTick', skillId); 
      },
      onCross(skillId) {
        // console.log(this);
        this.$emit('onCross', skillId);
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
