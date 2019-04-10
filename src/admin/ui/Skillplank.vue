<template lang="pug">
  .block.block-workflow
    SkillplankRow(
      :value = "value"
      @onEditRow = "onEditRow"
      @onTick = "onTickRow"
      @onCross = "onCrossRow"
      @handleRow = "handleRow"
    )
    SkillplankList(
      :values = "values"
      @onTrash = "onTrash"
      @onEdit = "onEdit"
      @onTick = "onTick"
      @onCross = "clearSkill"
      @handleName="handleName"
      @handlePrc="handlePrc"

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
        name: 'Git',
        prc: 100,
      },
      {
        id: Math.random(),
        name: 'Terminal',
        prc: 90,
      },
      {
        id: Math.random(),
        name: 'Gulp',
        prc: 80,
      },
      {
        id: Math.random(),
        name: 'Webpack',
        prc: 85,
      }],

      value: {
        id: Math.random(),
        name: 'Workflow'
      }
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
      let editedItem = this.values.find((el) => el.id === valueId);
      // валидация на проценты чтоб былон е больше 100
      if (editedItem.prc > 100) {
        alert('Проуенты не могут быть больше 100');
        return;
      }

      // -> /skills/{id} отправляешь запрос на бекенд на сохранения измененных данных
      // -> после удачного завершения запроса, ты выполняешь код дальше.
      // в противном случае return;

      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEdit', false);
        // el.isEdit = true;
        return el;
      });
    },
    onCross(valueId) {
      console.log("valueId", valueId);
      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEdit', false);
        // el.isCross = false;
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
    handlePrc(data) {
      this.values = this.values.map((el) => {
        if (el.id !== data.valueId) {
          return el;
        }

        Vue.set(el, 'prc', data.prc);
        // el.isEdit = true;
        return el;
      });
    },
    clearSkill(valueId) {

      this.values = this.values.map((el) => {
        if (el.id !== valueId) {
          return el;
        }

        Vue.set(el, 'name', '');
        Vue.set(el, 'prc', '');
        // event.target.reset();

        return el;
      });
    },
    onEditRow(valueId) {
      console.log("valueId", valueId);
      Vue.set(this.value, 'isEditRow', true);
    },
    onTickRow(valueId) {
      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEditRow', false);
        // el.isEdit = true;
        return el;
      });
    },
    onCrossRow(valueId) {
      // console.log(this);
      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEditRow', false);
        // el.isCross = false;
        return el;
      });
    },
    handleRow(data) {
      this.values = this.values.map((el) => {
        if (el.id !== data.valueId) {
          return el;
        }

        Vue.set(el, 'name', data.val);
        // el.isEdit = true;
        return el;
      });
    },
  }
};
</script>

<style lang="pcss">
@import "./skillplank.pcss";
</style>
