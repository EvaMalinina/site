<template lang='pug'>
  .item
    input.block__input.block__input_unit.block__input_unit-name(
      name='newskill',
      v-model="inputSkill",
      required='',
      :disabled="!skill.isEdit ? true : false",
      :style="{pointerEvents: skill.isEdit ? 'auto' : 'none'}",
      :class="skill.isEdit ? 'block__input_active' : ''"
    )
    input.block__input.block__input_unit.block__input_unit-perc(
      name='percent',   
      v-model="inputPrc"
      required='',
      :class="skill.isEdit ? 'block__input_active' : ''"
      )
    Btns(
      :onEdit="!skill.isEdit ? (() => onEdit(skill)) : false"
      :onTrash="!skill.isEdit ? (() => onTrash(skill)) : false"
      :onTick="skill.isEdit ? (() => onTick(skill)) : false"
      :onCross="skill.isEdit ? (() => onCross(skill)) : false"
    )

</template>

<script>

import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('skills');

export default {
  name: 'SkillplankItem',
  props: {
    skill: Object,
    handleSkillName: Function,
    handleSkillPrc: Function
  },
  data () {
    return {}
  },
  computed: {
    inputSkill: {
      get () {
        return this.skill.title;
      },
      set (value) {
        this.$emit('handleSkillName', value);
      }
    },
    inputPrc: {
      get () {
        return this.skill.percent;
      },
      set (value) {
        this.$emit('handleSkillPrc', value);
      }
    },
  },
  methods: {
    onTick(skill) {
      this.$emit('onTick', skill.id);
    },
    onTrash(skill) {
      this.$emit('onTrash', skill.id);
    },
    onEdit(skill) {
      this.$emit('onEdit', skill);
    },
    onCross(skill) {
      this.$emit('onCross', skill);
    }
  },
  components: {
    Btns: () => import('./Btns.vue')
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
