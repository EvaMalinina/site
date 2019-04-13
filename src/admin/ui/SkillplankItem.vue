<template lang='pug'>
  .item(v-if = "isEdit === false")
    input.block__input.block__input_unit.block__input_unit-name(
      name='newskill',
      :value="`${skill.title}`",
      @input="handleName(skill, $event)",
      @onCross="clearSkill(skill, $event)",
      required='',
      :disabled="!skill.isEdit ? true : false",
      :style="{pointerEvents: skill.isEdit ? 'auto' : 'none'}",
      :class="skill.isEdit ? 'block__input_active' : ''"
    )
    input.block__input.block__input_unit.block__input_unit-perc(
      name='percent',
      :value="`${skill.percent}`",
      @input="handlePrc(skill, $event)",
      @change="clearSkill(skill, $event)",
      required='',
      :class="skill.isEdit ? 'block__input_active' : ''"
      )
    Btns(
      :onEdit="isEdit = true"
      :onTrash="onTrash"
    )
  .item(v-else)
    input.block__input.block__input_unit.block__input_unit-name(
      name='newskill',
      :value="`${editedSkill.title}`",
      @input="handleName(skill, $event)",
      @onCross="clearSkill(skill, $event)",
      required='',
      :disabled="!skill.isEdit ? true : false",
      :style="{pointerEvents: skill.isEdit ? 'auto' : 'none'}",
      :class="skill.isEdit ? 'block__input_active' : ''"
    )
    input.block__input.block__input_unit.block__input_unit-perc(
      name='percent',
      :value="`${editedSkill.percent}`",
      @input="handlePrc(skill, $event)",
      @change="clearSkill(skill, $event)",
      required='',
      :class="skill.isEdit ? 'block__input_active' : ''"
      )
    Btns(
      :onTick="onTick"
      :onCross="isEdit = false"
    )

</template>

<script>
import Btns from "./Btns"

import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('skills');

export default {
  name: 'SkillplankItem',
  props: {
    skill: Object
  },
  data () {
    return {
      isEdit: false,
      editedSkill: {...this.skill}
    }
  },
  computed: {},
  methods: {
    onTick(value) {
      this.$emit('onTick', this.skill.id);
    },
    onTrash(item) {
      this.$emit('onTrash', this.skill.id);
    },
    onEdit(value) {
      console.log(value)
      this.$emit('onEdit', this.skill.id);
    },
    onCross(value) {
      console.log('asd', skill);
      this.$emit('onCross', this.skill.id);
    },
    handleName(skill, e) {
      this.$emit('handleName', {
        valueId: skill.id,
        val: e.target.skill
      });
    },
    handlePrc(skill, e) {
      console.log("skill", skill);
      this.$emit('handlePrc', {
        valueId: skill.id,
        prc: e.target.skill
      });
    },
    clearSkill(skill, e) {
      console.log("e", e)
      console.log("skill", skill);
      this.$emit('clearSkill', {
        valueId: skill.id,
        val: e.target.skill
      });
    }
  },
  components: {
    Btns
  }
}
</script>


<style lang='pcss'>
.item {
  display: flex;
  width: 100%;
}
.block__input_unit {
  margin-right: 7%;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: normal;
  line-height: 22;
  letter-spacing: normal;
  text-align: left;
  color: #414c63;
  border-bottom: solid 1px transparent;
}
.block__input_active {
  border-bottom: solid 1px black;
  text-align: center;
}
.block__input_active:hover {
  border-bottom: solid 1px #383bcf;
}
.block__input_unit-name {
  min-width: 58%;
  margin-right: 4%;
}
.block__input_unit-perc {
  min-width: 16%;
  align-items: center;
  text-align: center;
  margin-right: 11%;
}
</style>
