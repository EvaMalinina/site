<template lang='pug'>
  .item
    input.block__input.block__input_unit.block__input_unit-name(
      name='newskill',
      :placeholder="`${value.name}`",
      required=''
      :disabled="!value.isEdit ? true : false"
      :class="{pointerEvents: value.isEdit ? 'auto' : 'none'}"
    )
    input.block__input.block__input_unit.block__input_unit-perc(
      name='percent', 
      :placeholder="`${value.prc} %`", 
      required=''
      )
    Btns(
      :onEdit="() => onEdit(value)"
      :onTrash="() => onTrash(value)"
      :onTick="!value.isTick ? (() => onTick(value)) : false"
      :onCross="value.isCross ? (() => onCross(value)) : false"
    )
    
    //- button(@click="onTrash(item)") удалить
</template>

<script>
import Btns from "./Btns"

  export default {
    name: 'SkillplankItem',
    data () {
      return {

      }
    },
    props: {
      value: Object
    },
    computed: {},
    methods: {
      onTick() {
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