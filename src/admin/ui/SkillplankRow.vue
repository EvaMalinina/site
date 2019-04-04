<template lang='pug'>
  .block__row.block__row_first
    input.block__input.block__input_bb.block__input_first(
      name='newgroupname', 
      placeholder='Workflow', 
      required='',
      v-model="row.name"
      @keydown.enter="addRowname"
    )

    Btns(
      :onCross="() => onCross(value)"
      :onTick="() => onTick(value)"
    )

      //- .block__pencil
      //-   button.button__pencil

      //- .block__tick
      //-   button.button__tick
      //- .block__cross
      //-   button.button__cross

</template>

<script>
import Btns from './Btns'

  export default {
    name: 'SkillplankRow',
    data () {
      return {
        row: 'name'
      }
    },
    computed: {},
    methods: {
      addRowname() {
        this.$emit('addRowname', 'this.row');
        this.row.name = ""
      },
      onTick() {
        this.$emit('onTick', this.row.id);
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
  
  @include placeholder {
    font-size: 18px;
    word-wrap: break-word;
    font-weight: 600;
    line-height: 1.89;
    letter-spacing: normal;
    text-align: left;
    color: #414c63;
  }  
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