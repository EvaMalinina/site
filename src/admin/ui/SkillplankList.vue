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
        @onCross = "onCross"
        @handleSkillName="handleSkillName"
        @handleSkillPrc="handleSkillPrc"
      )

</template>

<script>

export default {
  name: 'SkillplankList',
  data () {
    return {}
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
    onTick(skill) {
      this.$emit('onTick', skill); 
    },
    handleSkillName(value) {
      this.$emit('handleSkillName', value);
    },
    handleSkillPrc(value) {
      this.$emit('handleSkillPrc', value);
    },
    onCross(skill) {
      this.$emit('onCross', skill);
    }
  },
  components: {
    SkillplankItem: () => import('./SkillplankItem.vue')
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
