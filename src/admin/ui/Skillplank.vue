<template lang="pug">
  .block.block-workflow
    .block__row.block__row_first
      input.block__input.block__input_bb.block__input_first(
        name='newgroup',
        placeholder='Workflow',
        required=''
        v-model="newItemName"
      )

      Btns(
        :onTick="onTickFunc"
      )

        //- .block__pencil
        //-   button.button__pencil

        //- .block__tick
        //-   button.button__tick
        //- .block__cross
        //-   button.button__cross
    ul.block__list
      li(
        v-for="item in values"
      ).block__item
        input.block__input.block__input_unit.block__input_unit-name(
          name='newskill',
          :placeholder="item.name",
          required=''
          :disabled="!item.isEdit ? true : false"
          :class="{pointerEvents: item.isEdit ? 'auto' : 'none'}"
        )
        input.block__input.block__input_unit.block__input_unit-perc(name='percent', :placeholder="`${item.prc} %`", required='')
        Btns(
          :onTrash="() => onTrash(item)"
          :onEdit="!item.isEdit ? (() => onEdit(item)) : false"
          :onCross="item.isEdit ? (() => onCross(item)) : false"
        )
        //- button(@click="onTrash(item)") удалить


      //- li.block__item
      //-   input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='GIT', required='')
      //-   input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='100 %', required='')
      //-   Btns
          //- .block__pencil
          //-   button.button__pencil
          //- .block__trash
          //-   button.button__trash
          //- .block__tick
          //-   button.button__tick
          //- .block__cross
          //-   button.button__cross
      //- li.block__item
      //-   input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='Terminal', required='')
      //-   input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='95 %', required='')
      //-   .block__btns
      //-     .block__pencil
      //-       button.button__pencil
      //-     .block__trash
      //-       button.button__trash
          //- .block__tick
          //-   button.button__tick
          //- .block__cross
          //-   button.button__cross
      //- li.block__item
      //-   input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='Gulp', required='')
      //-   input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='60 %', required='')
      //-   .block__btns
      //-     .block__pencil
      //-       button.button__pencil
      //-     .block__trash
      //-       button.button__trash
          //- .block__tick
          //-   button.button__tick
          //- .block__cross
          //-   button.button__cross
      //- li.block__item
      //-   input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='Webpack', required='')
      //-   input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='80 %', required='')
      //-   .block__btns
      //-     .block__pencil
      //-       button.button__pencil
      //-     .block__trash
      //-       button.button__trash
          //- .block__tick
          //-   button.button__tick
          //- .block__cross
          //-   button.button__cross
    .block__row.block__row_last
      input.block__input.block__input_newskill(name='newskill', placeholder='New skill', required='')
      input.block__input.block__input_percentage(name='percent', placeholder='100 %', required='')
      button.circle-btn.cirlce-btn_block
</template>

<script>
import Btns from "./Btns"

export default {
  name: 'Skillplank',
  data() {
    return {
      newItemName: '',
      values: [{
        id: Date.now(),
        name: 'git',
        prc: 100,
      }]
    }
  },
  components: {
    Btns
  },
  methods: {
    onTickFunc() {
      this.values.push({
        id: Date.now(),
        name: this.newItemName,
        prc: 0
      });
      this.newItemName = '';
    },
    onTrash(item) {
      console.log("item", item);
      this.values = this.values.filter((i) => i.id !== item.id);
    },
    onEdit(item) {
      console.log("item", item);
      this.values = this.values.map((el) => {
        if (el.id !== item.id ) {
          return el;
        }

        el.isEdit = true;
        return el;
      });

      console.log("values", this.values);
    },
    onCross() {

    }
  }
};
</script>

<style lang="pcss">
@import "./skillplank.pcss";
</style>
