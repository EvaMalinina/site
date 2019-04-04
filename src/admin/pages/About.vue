<template lang="pug">
  .content
    .container
      .block-info
        .block-info__name Block «About me»
        ButtonAddgroup
        
      .blocks
        .block.block-new 
          .block__row.block__row_first
            input.block__input.block__input_bb.block__input_first(name='newgroup', placeholder='Write name of new group', required='')
            .block__btns
              //- .block__pencil
              //-   button.button__pencil
              .block__tick
                button.button__tick
              .block__cross
                button.button__cross
          .block__row.block__row_last 
            input.block__input.block__input_newskill(name='newskill', placeholder='New skill', required='')
            input.block__input.block__input_percentage(name='percent', placeholder='100 %', required='')
            button.circle-btn.cirlce-btn_block
        Skillplank
        //- .block.block-workflow
        //-   .block__row.block__row_first
        //-     input.block__input.block__input_bb.block__input_first(name='newgroup', placeholder='Workflow', required='')
        //-     .block__btns
        //-       //- .block__pencil
        //-       //-   button.button__pencil
        //-       .block__tick
        //-         button.button__tick
        //-       .block__cross
        //-         button.button__cross
        //-   ul.block__list
        //-     li.block__item
        //-       input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='GIT', required='')
        //-       input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='100 %', required='')
        //-       .block__btns
        //-         .block__pencil
        //-           button.button__pencil
        //-         .block__trash
        //-           button.button__trash
        //-         //- .block__tick
        //-         //-   button.button__tick
        //-         //- .block__cross
        //-         //-   button.button__cross
        //-     li.block__item
        //-       input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='Terminal', required='')
        //-       input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='95 %', required='')
        //-       .block__btns
        //-         .block__pencil
        //-           button.button__pencil
        //-         .block__trash
        //-           button.button__trash
        //-         //- .block__tick
        //-         //-   button.button__tick
        //-         //- .block__cross
        //-         //-   button.button__cross
        //-     li.block__item
        //-       input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='Gulp', required='')
        //-       input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='60 %', required='')
        //-       .block__btns
        //-         .block__pencil
        //-           button.button__pencil
        //-         .block__trash
        //-           button.button__trash
        //-         //- .block__tick
        //-         //-   button.button__tick
        //-         //- .block__cross
        //-         //-   button.button__cross
        //-     li.block__item
        //-       input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='Webpack', required='')
        //-       input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='80 %', required='')
        //-       .block__btns
        //-         .block__pencil
        //-           button.button__pencil
        //-         .block__trash
        //-           button.button__trash
        //-         //- .block__tick
        //-         //-   button.button__tick
        //-         //- .block__cross
        //-         //-   button.button__cross
        //-   .block__row.block__row_last 
        //-     input.block__input.block__input_newskill(name='newskill', placeholder='New skill', required='')
        //-     input.block__input.block__input_percentage(name='percent', placeholder='100 %', required='')
        //-     button.circle-btn.cirlce-btn_block
        .block.block-frontend 
          .block__row.block__row_first
            input.block__input.block__input_bb.block__input_first(name='newgroup', placeholder='Frontend', required='')
            .block__btns
              .block__pencil
                button.button__pencil
              //- .block__tick
              //-   button.button__tick
              //- .block__cross
              //-   button.button__cross
          ul.block__list
            li.block__item
              input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='HTML5', required='')
              input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='100 %', required='')
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
              input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='CSS3', required='')
              input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='95 %', required='')
              .block__btns
                //- .block__pencil
                //-   button.button__pencil
                //- .block__trash
                //-   button.button__trash
                .block__tick
                  button.button__tick
                .block__cross
                  button.button__cross
                
            li.block__item
              input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='JavaScript', required='')
              input.block__input.block__input_unit.block__input_unit-perc(name='percent', placeholder='50 %', required='')
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
              input.block__input.block__input_unit.block__input_unit-name(name='newskill', placeholder='jQuery and Vue.js', required='')
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
import Skillplank from "../ui/Skillplank"
import ButtonAddgroup from "../ui/ButtonAddgroup"

export default {
  name: 'About',
  components: {
    Skillplank,
    ButtonAddgroup
  }
};
</script>

<style lang="pcss">
@import "../../styles/mixins.pcss";
.content {
  display: grid;
  grid-area: content;
  background-color:#f7f9fe;
}
.block-info {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template: 135px
  / repeat(5, 1fr);
}
.block-info__name {
  font-size: 21px;
  font-weight: bold;
  line-height: 1.62;
  letter-spacing: normal;
  text-align: left;
  color: #414c63;
}
/* .block-info__modify {
  display: flex;
  align-items: center;
} */
/* .block-info__add {
  font-size: 16px;
  font-weight: 400;
  line-height: 2.12;
  letter-spacing: normal;
  text-align: left;
  color: #383bcf;
  margin-left: 14px;
}
.circle-btn {
  width: 21px;
  height: 21px;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
  border-radius: 50%;
  position: relative;
}
.circle-btn::after {
  content: "+";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  font-size: 15px;
  color: #ffffff;
} */

.blocks {
  display: grid;
  grid-template: 387px 387px 
  /525px 525px;
  grid-row-gap: 30px;
  grid-column-gap: 30px;
  justify-content: center;
}
/* .block {
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
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
.block__input_newskill, .block__input_percentage {   
  border-bottom: solid 1px #1f232d;
  padding-left: 5%;

  @include placeholder {
    opacity: 0.5;
    font-size: 16px;
    font-weight: normal;
    line-height: 6.2;
    text-align: left;
    color: rgba(55, 62, 66, 0.5);
  }
}
.block__input_newskill {
  width: 213px;
  margin-right: 10px;
}
.block__input_percentage {
  width: 74px;
  margin-right: 15px;
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
.cirlce-btn_block {
  width: 40px;
  height: 40px;
}
.cirlce-btn_block::after {
  font-size: 30px;
}
.block__btns {
  width: 9%;
  min-width: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: center;
}
.block__pencil {
  width: 14px;
  height: 14px;
}
.button__pencil {
  height: 100%;
  width: 100%;
  background: svg-load('../../images/icons/pencil.svg', fill=#a0a5b1, height=100%, width=100%);
  background-repeat: no-repeat;
}
.block__trash {
  width: 12px;
  height: 15px;
}
.button__trash {
  height: 100%;
  width: 100%;
  background: svg-load('../../images/icons/trash.svg', fill=#a0a5b1, height=100%, width=100%);
  background-repeat: no-repeat;
}
.block__tick {
  width: 15px;
  height: 12px;
}
.button__tick {
  height: 100%;
  width: 100%;
  background: svg-load('../../images/icons/tick.svg',  fill= #00d70a, height=100%, width=100%);
  background-repeat: no-repeat;
}
.block__cross {
  width: 14px;
  height: 12px;
}
.button__cross {
  height: 100%;
  width: 100%;
  background: svg-load('../../images/icons/remove.svg',  fill= #bf2929, height=100%, width=100%);
  background-repeat: no-repeat;
}
.block__list {
  width: 100%;
  align-self: center;
  padding: 0px 0px 0px 10px;
}
.block__item {
  margin-bottom: 20px;
  display: flex;
}
.block-workflow {
  /* display: grid; */
  /*box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
} */
.block-frontend {
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}
</style>
