<template lang="pug">
  .block.block-workflow
    SkillplankRow(
      @addRowname = "addRowname"
      @onTick = "onTick"
      @onCross = "onCross"
    )    
    SkillplankList(
      :values = "values"
      @onTrash = "onTrash"
      @onEdit = "onEdit"
      @onTick = "onTick"
      @onCross = "onCross"
    )
    SkillplankInput(
      @addSkill="addSkill"
    )
    
    
</template>

<script>
// import Btns from "./Btns"
import SkillplankInput from "./SkillplankInput"
import SkillplankList from "./SkillplankList"
import SkillplankRow from "./SkillplankRow"
import { logicalExpression } from 'babel-types';

export default {
  name: 'Skillplank',
  data() {
    return {
      // values: [],
      // name: '',
      // prc: '',
      values: [{
        id: Date.now(),
        name: 'git',
        prc: 100,
      }],
      row: "name"
    }
  },
  components: {
    SkillplankInput,
    SkillplankList,
    SkillplankRow
   
  },
  methods: {
    addSkill(values) {
      this.values.push({
        values 
        // id: Date.now(),
        // name: this.name,
        // prc: this.prc
      });
    },
    onTrash (valueId) {
      this.values = this.values.filter(item => item.id !== valueId);
    },
    onEdit(value) {
      console.log("value", value);
      this.values = this.values.map((el) => {
        if (el.id !== value.id ) {
          return el;
        }

        el.isEdit = true;
        return el;
      });

      console.log("values", this.values);
    },
    onTick() {
      this.values.push({
        id: Date.now(),
        name: this.name,
        prc: 0
      });
      this.name = '';
    },
    onCross(value) {
      this.values = this.values.map((el) => {
        if (el.id === value.id ) {
          return el;
        }

        el.isCross = false;
        return el;
      });
    }   
  }
};
</script>

<style lang="pcss">
@import "./skillplank.pcss";
</style>
