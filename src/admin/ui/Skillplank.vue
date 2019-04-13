<template lang="pug">
  .block.block-workflow
    SkillplankRow(
      :category="category"
      @onEditRow = "onEditRow"
      @onTick = "onTickRow"
      @onCross = "onCrossRow"
      @handleRow = "handleRow"
    )
    SkillplankList(
      :skills = "skills"
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
import { logicalExpression } from 'babel-types';

import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('skills');

export default {
  name: 'Skillplank',
  props: {
    category: Object,
    skills: Array,
  },
  data() {
    return {
      // category: this.category.id,

      // values: [{
      //   id: Math.random(),
      //   name: 'Git',
      //   prc: 100,
      // },
      // {
      //   id: Math.random(),
      //   name: 'Terminal',
      //   prc: 90,
      // },
      // {
      //   id: Math.random(),
      //   name: 'Gulp',
      //   prc: 80,
      // },
      // {
      //   id: Math.random(),
      //   name: 'Webpack',
      //   prc: 85,
      // }],

      // value: {
      //   id: Math.random(),
      //   name: 'Workflow'
      // },

    }
  },
  components: {
    SkillplankInput: () => import('./SkillplankInput.vue'),
    SkillplankList: () => import('./SkillplankList.vue'),
    SkillplankRow: () => import('./SkillplankRow.vue'),
  },
  methods: {
    ...mapActions(['addNewSkill']),
    async addSkill(newSkillData) {
      try {
        await this.addNewSkill({
          ...newSkillData,
          category: this.category.id
        });
      } catch (error) {
        alert('New skill did not add')
      }
      // this.values.push(values);
    },
    // onTrash () { 
    //   // this.values = this.values.filter(item => item.id !== valueId);
    // },
    // onEdit() { 
      // this.values = this.values.map((el) => {
      //   if (el.id !== valueId ) {
      //     return el;
      //   }

      //   Vue.set(el, 'isEdit', true);
      //   return el;
      // });
    // },
    onTick(skillId) {
      let editeSkill = this.skills.find((el) => el.id === skillId);
      // валидация на проценты чтоб былон е больше 100
      if (editeSkill.percent > 100) {
        alert('Проценты не могут быть больше 100');
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
  },
};
</script>

<style lang="pcss">
@import "./skillplank.pcss";
</style>
