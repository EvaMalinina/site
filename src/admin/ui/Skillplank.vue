<template lang="pug">
  .block.block-workflow
    .block__row.block__row_first
      input.block__input.block__input_bb.block__input_first(name='newgroup', placeholder='Workflow', required='')
      Btns
        
        //- .block__pencil
        //-   button.button__pencil
        
        //- .block__tick
        //-   button.button__tick
        //- .block__cross
        //-   button.button__cross
    ul.block__list
      li.block__item
        input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='GIT', required='')
        input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='100 %', required='')
        Btns
          //- .block__pencil
          //-   button.button__pencil
          //- .block__trash
          //-   button.button__trash
          //- .block__tick
          //-   button.button__tick
          //- .block__cross
          //-   button.button__cross
      li.block__item
        input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='Terminal', required='')
        input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='95 %', required='')
        .block__btns
          .block__pencil
            button.button__pencil
          .block__trash
            button.button__trash
          //- .block__tick
          //-   button.button__tick
          //- .block__cross
          //-   button.button__cross
      li.block__item
        input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='Gulp', required='')
        input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='60 %', required='')
        .block__btns
          .block__pencil
            button.button__pencil
          .block__trash
            button.button__trash
          //- .block__tick
          //-   button.button__tick
          //- .block__cross
          //-   button.button__cross
      li.block__item
        input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='Webpack', required='')
        input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='80 %', required='')
        .block__btns
          .block__pencil
            button.button__pencil
          .block__trash
            button.button__trash
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
  components: {
    Btns
  }
};
</script>

<style lang="pcss">
@import "./skillplank.pcss";
</style>