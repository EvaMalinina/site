<template lang="pug">
  .block.block-workflow
    SkillplankRow(
      @onEdit = "onEdit"
      @onTick = "onTick"
      @onCross = "onCross"
    )
    SkillplankList(
      :values = "values"
      @onTrash = "onTrash"
      @onEdit = "onEdit"
      @onTick = "onTick"
      @onCross = "onCross"
      @handleName="handleName"
    )
    SkillplankInput(
      @addSkill="addSkill"
    )


</template>

<script>
import Vue from 'vue';
// import Btns from "./Btns"
import SkillplankInput from "./SkillplankInput"
import SkillplankList from "./SkillplankList"
import SkillplankRow from "./SkillplankRow"
import { logicalExpression } from 'babel-types';

export default {
  name: 'Skillplank',
  data() {
    return {
      values: [{
        id: Math.random(),
        name: 'git',
        prc: 100,
      },
      {
        id: Math.random(),
        name: 'git',
        prc: 100,
      }],
      row: 'name'
    }
  },
  components: {
    SkillplankInput,
    SkillplankList,
    SkillplankRow
  },
  methods: {
    addSkill(values) {
      this.values.push(values);
    },
    onTrash (valueId) {
      this.values = this.values.filter(item => item.id !== valueId);
    },
    onEdit(valueId) {
      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEdit', true);
        // el.isEdit = true;
        return el;
      });
    },
    onTick(valueId) {
      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEdit', false);
        // el.isEdit = true;
        return el;
      });
    },
    onCross(value) {
      this.values = this.values.map((el) => {
        if (el.id === value.id ) {
          return el;
        }

        el.isCross = false;
        return el;
      });
    },
    handleName(data) {
      this.values = this.values.map((el) => {
        if (el.id !== data.valueId) {
          return el;
        }

        Vue.set(el, 'name', data.val);
        // el.isEdit = true;
        return el;
      });
    },
    clearSkill(valueId) {
      this.values = this.values.map((el) => {
        if (el.id !== data.valueId) {
          return el;
        }

        Vue.set(el, 'name', '');
        Vue.set(el, 'prc', '');
        // el.isEdit = true;
        return el;
      });
    }
  }
};
</script>

<style lang="pcss">
@import "./skillplank.pcss";
</style>
