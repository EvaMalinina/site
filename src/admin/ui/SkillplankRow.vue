<template lang='pug'>
  .block__row.block__row_first
    input.block__input.block__input_bb.block__input_first(
      name='newgroupname',
      v-model="value.skillTitle",
      @input="handleRow(value, $event)", 
      required='',
      :disabled="!value.isEditRow ? true : false",
      :style="{pointerEvents: value.isEditRow ? 'auto' : 'none'}",
      :class="value.isEditRow ? 'block__input_active' : ''" 
    )

    Btns(
      :onEdit="!value.isEditRow ? (() => onEdit(value)) : false"
      :onCross="value.isEditRow ? (() => onCross(value)) : false"
      :onTick="value.isEditRow ? (() => onTick(value)) : false"
    )

</template>

<script>
import Btns from './Btns'

  export default {
    name: 'SkillplankRow',
    data () {
      return {
        skillTitle: ''
      }
    },
    props: {
      value: Object,
    },
    computed: {},
    methods: {
      onTick(value) {
        this.$emit('onTickRow', this.value.id);
      },
      onEdit(value) {
        // console.log(value);
        // this.$emit('onEditRow', this.value.id);
        this.$emit('onEditRow', {...this.value.id});
        // this.value.name = "";
      },
      onCross(value) {
        this.$emit('onCrossRow', this.value.id);
      },
      handleRow(value, e) {
        console.log("e", e)
        console.log("value", value);
        this.$emit('handleRow', {
          valueId: value.id,
          val: e.target.value
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