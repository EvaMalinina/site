<template lang='pug'>
  .block__row.block__row_first
    input.block__input.block__input_bb.block__input_first(
      name='newgroupname',
      v-model="category.category", 
      @input="handleInput(category, $event)",
      required='',
      :disabled="!category.isEditRow ? true : false",
      :style="{pointerEvents: category.isEditRow ? 'auto' : 'none'}",
      :class="category.isEditRow ? 'block__input_active' : ''"
    )

    Btns(
      :onEdit="!category.isEditRow ? (() => onEdit(category)) : false"
      :onCross="category.isEditRow ? (() => onCross(category)) : false"
      :onTick="category.isEditRow ? (() => onTick(category)) : false"
    )

</template>

<script>
import Btns from './Btns'

export default {
  name: 'SkillplankRow',
  data () {
    return {
      // skillTitle: ''
    }
  },
  props: {
    category: Object,
    value: Object,
    onTickRow: Function,
    onEditRow: Function,
    onCrossRow: Function,
    handleRow: Function
  },
  computed: {},
  methods: {
    onTick(value) {
      this.$emit('onTickRow', this.category.id);
    },
    onEdit(value) {
      console.log("value", value);
      this.$emit('onEditRow', this.category.id);
    },
    onCross(value) {
      this.$emit('onCrossRow', this.category.id);
    },
    handleInput(value, e) {
      this.$emit('handleRow', {
        valueId: category.id,
        val: e.target.category
      });
    },
  },
  components: {
    Btns
  }
}
</script>


<style lang='pcss'>
@import "../../styles/mixins.pcss";

.block__row {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
}
.block__row_last {
  justify-content: flex-end;
}
.block__row_first {
  border-bottom: solid 1px #dedee0;
  padding: 5px;
  justify-content: space-between;
}
.block__input {
  width: fit-content;
  height: 100%;
  font-size: 18px;
  word-wrap: break-word;
  font-weight: 600;
  line-height: 1.89;
  letter-spacing: normal;
  text-align: left;
  color: #414c63;

}
.block__input_bb {
  border-bottom: solid 1px #1f232d;
}
.block__input_first {
  padding: 0px 0px 0px 10px;
  margin-top: 25px;
  width: 60%;
}
</style>
