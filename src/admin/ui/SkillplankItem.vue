<template lang='pug'>
  .item
    input.block__input.block__input_unit.block__input_unit-name(
      name='newskill',
      :value="`${value.name}`",
      @input="handleName(value, $event)"
      required=''
      :disabled="!value.isEdit ? true : false"
      :style="{pointerEvents: value.isEdit ? 'auto' : 'none'}"
      :class="value.isEdit ? 'block__input_active' : ''"
    )
    input.block__input.block__input_unit.block__input_unit-perc(
      name='percent',
      :value="`${value.prc} %`",
      required=''
      )
    Btns(
      :onEdit="!value.isEdit ? (() => onEdit(value)) : false"
      :onTrash="!value.isEdit ? (() => onTrash(value)) : false"
      :onTick="value.isEdit ? (() => onTick(value)) : false"
      :onCross="value.isEdit ? (() => onCross(value)) : false"
    )

    //- button(@click="onTrash(item)") удалить
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
    onCross() {
      this.$emit('onCross', this.value.id);
    },
    handleName(value, e) {
      console.log("e", e);
      console.log("value", value);
      this.$emit('handleName', {
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
@import "../../styles/mixins.pcss";

.item {
  display: flex;
  width: 100%;
  justify-content: center;
}
.block__input_unit {
  margin-right: 7%;
  padding-bottom: 10px;

   @include placeholder {
   font-size: 16px;
   font-weight: normal;
   line-height: 22;
   letter-spacing: normal;
   text-align: left;
   color: #414c63;
   }

}
.block__input_unit-name {
  width: 60%;
}
.block__input_unit-perc {
  width: 15%;
  align-items: center;
  text-align: center;
}
</style>
