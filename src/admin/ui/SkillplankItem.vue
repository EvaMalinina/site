<template lang='pug'>
  .item
    input.block__input.block__input_unit.block__input_unit-name(
      name='newskill',
      :value="`${value.name}`",
      @input="handleName(value, $event)",
      @onCross="clearSkill(value, $event)",
      required='',
      :disabled="!value.isEdit ? true : false",
      :style="{pointerEvents: value.isEdit ? 'auto' : 'none'}",
      :class="value.isEdit ? 'block__input_active' : ''"
    )
    input.block__input.block__input_unit.block__input_unit-perc(
      name='percent',
      :value="`${value.prc}`",
      @input="handlePrc(value, $event)",
      @change="clearSkill(value, $event)",

      required='',
      :class="value.isEdit ? 'block__input_active' : ''"
      )
    Btns(
      :onEdit="!value.isEdit ? (() => onEdit(value)) : false"
      :onTrash="!value.isEdit ? (() => onTrash(value)) : false"
      :onTick="value.isEdit ? (() => onTick(value)) : false"
      :onCross="value.isEdit ? (() => onCross(value)) : false"
    )

</template>

<script>
import Btns from "./Btns"

export default {
  name: 'SkillplankItem',
  data () {
    return {}
  },
  props: {
    value: Object,
    // onTick: Function
  },
  computed: {},
  methods: {
    onTick(value) {
      this.$emit('onTick', this.value.id);
    },
    onTrash(item) {
      this.$emit('onTrash', this.value.id);
    },
    onEdit(value) {
      this.$emit('onEdit', this.value.id);
    },
    onCross(value) {
      console.log('asd', value);
      this.$emit('onCross', this.value.id);
    },
    handleName(value, e) {
      this.$emit('handleName', {
        valueId: value.id,
        val: e.target.value
      });
    },
    handlePrc(value, e) {
      console.log("value", value);
      this.$emit('handlePrc', {
        valueId: value.id,
        prc: e.target.value
      });
    },
    clearSkill(value, e) {
      console.log("e", e)
      console.log("value", value);
      this.$emit('clearSkill', {
        valueId: value.id,
        val: e.target.value
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
